# Granular Synthesis

In this tutorial, you will learn how to implement a granular synthesizer using the Web Audio API leveraging on the lookahead scheduling technique we seen in the previous tutorial.

### Related Documentation

- [AudioBufferSourceNode.start](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode/start)

## General principles

Granular synthesis is sound synthesis technique that consists in cutting a audio files in small pieces of sound of around 5 to 200ms called **_grains_**. These grains are then played back and layered to reconstruct a new sound. Each grain can also be manipulated independetly by modifying for example their pitch, volume, etc.

![granular-synthesis](../assets/granular-synthesis/granular-synthesis.png)

## Implement the synthesis engine

### Scaffold the project

```sh
cd ~/Desktop/webaudio-tutorials
npx @ircam/create@latest 06-granular-synthesis
cd 06-granular-synthesis
npx serve
```

### Import a library for scheduling

First, let's just import a library that will provide us with a much more robust version of the scheduler we implemented in last tutorial, while being build on the same principles:

```js {2}
// ./main.js
import { html, render } from 'https://unpkg.com/lit-html';
import { Scheduler } from 'https://unpkg.com/@ircam/sc-scheduling@0.1.6';
import 'https://unpkg.com/@ircam/sc-components@latest';
```

Replace the default sample in `./assets/sample.wav` with another longer one, and evetually modify the `loadAudioBuffer` first argument to match you file name:

```js 
// ./main.js
const buffer = await loadAudioBuffer('./assets/sample.wav', audioContext.sampleRate); // [!code --]
const buffer = await loadAudioBuffer('./assets/hendrix.wav', audioContext.sampleRate); // [!code ++]
```

### Implement the audio engine

Let's start with defining the new class which will be our granular engine:

```js
const buffer = await loadAudioBuffer('./assets/sample.wav', audioContext.sampleRate);

class GranularSynth {
  constructor(audioContext, buffer) {
    this.audioContext = audioContext;
    this.buffer = buffer;

    // time interval between each grain
    this.period = 0.025;
    // duration of each grain
    this.duration = 0.1;
    // position of the grain in the buffer
    this.position = 0;

    // create an output gain on wich will connect all our grains
    this.output = this.audioContext.createGain();
    // bind the render method so that we don't the instance context
    this.render = this.render.bind(this);
  }

  render(currentTime) {
    console.log(currentTime);
    // ask to be called at time of next grain
    return currentTime + this.period;
  }
}
```


For now, this doesn't make any sound, but let's see how to make it work with the scheduler:

```js
// ./main.js
class GranularSynth {
    // ...
}

// create a new scheduler, in the audioContext timeline
const scheduler = new Scheduler(() => audioContext.currentTime);
// create out granular synth and connect it to audio destination
const granular = new GranularSynth(audioContext, buffer);
granular.output.connect(audioContext.destination);
// register the synth into the scheduler and start it now
scheduler.add(granular.render, audioContext.currentTime);
```

If you reload the page and open the console, you should the start time of the grains displayed in the console:

![scheduler-working](../assets/granular-synthesis/scheduler-working.png)

Let's then continue with implementing our render method:

```js
// ./main.js
class GranularSynth {
  constructor(audioContext, buffer) {
    // ...
  }

  render(currentTime) {
    // create our evenvelop gain
    const env = this.audioContext.createGain();
    // connect it to output
    env.connect(this.output);
    // schedule the fadein and fadeout
    env.gain.value = 0;
    env.gain.setValueAtTime(0, currentTime);
    env.gain.linearRampToValueAtTime(1, currentTime + this.duration / 2);
    env.gain.linearRampToValueAtTime(0, currentTime + this.duration);

    // create the source that will play our grain
    const src = this.audioContext.createBufferSource();
    src.buffer = buffer;
    // connect to output
    src.connect(env);
    // play the grain at given position and for given duration
    src.start(currentTime, this.position);
    src.stop(currentTime + this.duration);

    // increment position so that we read the file at speed divided by 4
    this.position += this.period / 4;
    // make sure we don't try to pick a grain outside the buffer
    if (this.position > this.buffer.duration - this.duration) {
      this.position = 0;
    }

    // ask to be called at time of next grain
    return currentTime + this.period;
  }
}
```

The code is finally quite simple as we just create an audio buffer source node, pipe it into gain with a simple envelop automation, which is itself connected to the output node of the synth. At the end of the render method, we just update the position of the next grain so that the source file is played back at a portion of its normal speed. 

When you reload the page you should now ear you GranularSynth in action!

## Adding controls

Let's now finalize our application to add control interfaces to change the parameters of the synthesis in real-time.

## Conclusion

