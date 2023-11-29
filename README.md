## General

- [ ] insert iframe of the tutorial result at the beginning and end of each tutorial

## Home

- [ ] What is this site and target audience
- [ ] Web Technologies for musical and artistic creation. 
- [ ] Content and limits
    + [ ] Mix of "lectures" and "hands-on"
    + [ ] No external audio libraries, only for GUIs
    + [ ] Try to support complete beginners
        * [ ] No build tools 
    + [ ] Not focused on language(s), many good resources on the Web
    + [ ] The order has been defined to make a progression
    + [ ] Focused on Mac, contributions welcome to give some support to Windows users
- [ ] Contributing    
    + [ ] If you have ideas or find any issue, typo fill an issue
    + [ ] PR welcome 
        e.g. platform specific info Windows, Linux should be added, etc.
        new tutorials
- [ ] Other resources on Web Audio
    + [ ] mailing list
    + [ ] webaudio slack
    + [ ] https://github.com/notthetup/awesome-webaudio

### First steps

- [x] Understanding the guts of a Web page: 
    + [x] client/server architecture
    + [x] network protocols
    + [x] programming languages
    + [x] mention W3C -> info block
    + [x] rename to "Generalities"
    + [x] move iframes into `static-assets` directory
- [x] Setting up a development environment 
- [x] Develop a simple web page using HTML, CSS and JavaScript
    + [x] sharing the styles
    + [x] add some interaction
    + [x] shutdown the server
    + [x] going further with HTML and CSS

### Web Audio Basics

- [x] Web Audio API - Introduction
- [x] Oscillators and Audio files
- [x] Amplitude modulation synthesis 
    + [x] @ircam/create
    + [x] Using a GUI library
    + [x] redo recording
    + [ ] integrate Victor's schemas about AM theory
- [x] Encapsulating logic
- [x] Reusable feedback delay 

### Scheduling

- [x] Scheduling events: clocks and scheduling
    + [x] Lookahead scheduler principles
    + [x] Implement a simple scheduler
- [ ] Create a granular synthesizer
- [ ] Create a step sequencer

### Receipes

- [ ] Mini-catart
- [ ] AudioBus and setTargetAtTime
- [ ] Using a package manager and a bundler
- [ ] Going embedded with the node-web-audio-api
- [ ] Extending native AudioNodes
- [ ] Using AudioWorklet (?)

### Credits

- [ ] share credits with `soundworks.dev`
    + [ ] review to integrate `sc-*` and `dotpi-*`

## MISC

- [ ] Search bar
- [ ] Doc websites: share common styles and config into own package
    + @ircam/vitepress-templates
    
- [ ] Generate pdf from markdown: https://github.com/foliojs/pdfkit/blob/master/docs/generate.js
