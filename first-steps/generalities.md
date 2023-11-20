<script setup>
import { withBase } from 'vitepress'
</script>

# Generalities

This introducing article will just recall a few important concepts to grasp when working with Web pages and Web development.

## The _Internet_ & the _Web_

First thing first, let's define these two words that are often used interchangeably.

The _**Internet**_ defines a set communication protocols (e.g. TCP, UDP) which enables the interconnection the communication between different computers and of smaller networks of computers around the world [_inter-net(work)_].

::: info
- **1972** - First demonstration of ARPANET, a message is sent between UCLA and Stanford
- **1983** - ARPANET is officially renamed Internet
:::

The _**Web**_ (formerly known as the _World Wide Web_) defines a set of information technologies (e.g. HTTP, HTML) that are accessed through the __Internet__.

::: info
- **1989-1992** - Developed at the CERN by T. Berners Lee et Robert Caillau 
- **1993** - The CERN opens the technologies to the public
- **1994** - Creation of the _World Wide Web Consortium (W3C)_ which is in charge of standardizing the technologies.
:::

In other words, the _Internet_ is the infrastructure while the _Web_ is served on top of that infrastructure (in the same way as e.g. emails are served on top of the _Internet_).

## Clients & Servers

Another important set of concepts to understand when working with Web technologies is the idea of _**clients**_ and _**servers**_.

A _**server**_ is a piece of software (or hardware) that responds to requests to serve specific services to its clients. There are many kind of servers, such as Web servers, Domain Name Servers (DNS), or Mail servers, that everyone uses everyday when using Internet.

A _**client**_ is a program that connects to a server to access its service. For example, a **_Web browser_**, such as Firefox or Google Chrome, is a client program that connects to Web servers to access to Web informations and applications.

![web-technologies](../assets/generalities/web-technologies.png)

## Programming Languages

Our access to the Web is most often mediated by Web browsers, which are responsible for:

1. Requesting resources to Web servers through Uniform Resource Locators (URL, e.g. [https://www.ircam.fr](https://www.ircam.fr)).
2. Downloading the files associated to the URLs.
3. Interpreting these files to display the interface in the Web browser window.

Aside static resources such as images, videos or soundfiles, the Web browser can also download files that contain code that it can interpret and execute. The programming languages that Web browsers are able to understand are threefold: _HTML_, _CSS_ and _JavaScript_.

The _**HTML**_ (for _Hypertext Markup Language_) is a markup language that allows to describe the structure of a document and, importantly, to create links to other documents. As show in the example above, HTML provides a number of __tags__ that allows to describe the structure of your document. For example the `<h1>` tag descibes a 1rst level title (or "head"), the `<p>` tag describes a "paragraph" and the `<a>` tag describe a link (or "anchor") to another document:

```html
<h1>This is a title</h1>
<p>
    and a paragraph with a <a href="https://developer.mozilla.org/">link</a> 
    to the best documentation website on Web technologies
</p>
```

which will be interpreted by the browser as the following:

<iframe style="height: 130px;" :src="withBase('/generalities/html-example.htm')"></iframe>

The _**CSS**_ (for _Cascading Style Sheets_) is a language that allows to describe how the _HTML_ document is presented to the user. Or to make it short, to make it a bit more nice and pretty than what you have seen above.

For example if we apply the following CSS rules to the HTML we declared above:

```css
h1 {
    font-family: arial;
    font-size: 20px;
    color: steelblue;
}
p {
    font-family: arial;
}
a {
    font-style: italic;
    color: #454545;
}
```

The page, which is defined by the exact same HTML structure and content, will now appear as:

<iframe style="height: 110px;" :src="withBase('/generalities/css-example.htm')"></iframe>

Finally, _**JavaScript**_ provide a full featured programming language which allows to add interactivity to your Web page. For example, it allows you react to some user events (e.g. a "click" on a button), to get some information from a remote Web server without refreshing the page, or for what interests us in these tutorials, to make audio synthesis using the [Web Audi API](https://www.w3.org/TR/webaudio/). 

Here is very simple example showing JavaScript allows you to react to a user interaction to make some sound:

```html
<button>Click Me!</button>
<script>
// get a reference to the HTML button define above
const button = document.querySelector('button');
let audioContext = null;
// listen for a click from the user
button.addEventListener('click', async () => {
  // creates the audio context on first click
  if (!audioContext) {
    audioContext = new AudioContext;
    await audioContext.resume();
  }

  // create an oscillator with (almost) random frequency
  const osc = audioContext.createOscillator();
  osc.connect(audioContext.destination);
  osc.frequency.value = 100 * (Math.floor(Math.random() * 20)) + 1;
  osc.start();
});
</script>
```

<iframe style="height: 40px;" :src="withBase('/generalities/js-example.htm')"></iframe>

::: tip
To stop the sound, just reload the Web page with `Cmd+R` on Mac or `Ctrl + R` on windows. 
This is a shortcut you will need a lot while developping Web pages!
:::

## Conclusion

Now that you have a better understanding of the different technologies involved in creating Web pages, let's continue with preparing your system to have a working development environment.


