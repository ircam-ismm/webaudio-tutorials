# Setting Up an Environment

In this tutorial, we will install and configure a few things to have all the necessary tools to develop simple Web pages in good conditions.

The set of tools we propose here are not mandatory and many alternatives exists for each of them. If you already have a setup you like and are comfortable with, just skip this page and proceed with your existing setup.

## Text Editor

A very important tool to write code is a proper text editor. There are numerous free text editors, each of them with their specific qualities and drawbacks (just keep in mind that the _best_ tool is very often the one you know well...).

Here are two text editors that are quite popular nowadays:

- VSCode - [download](https://code.visualstudio.com/) - _probably the most popular one these days_
- Sublime Text 3 - [download](https://sublimetext.com/3)

## Node.js

Once done, let's continue with installing the [Node.js](https://nodejs.org/) environment. Node.js is a cross-platform _JavaScript_ runtime environment that is often used to develop servers or command-line tools. We won't make an extensive use of Node.js in these series, but only use it to install and run the simple Web server we will need for developing our Web pages.

1. Open [https://nodejs.org](https://nodejs.org) in your favorite browser (which shall not be Safari).
2. Download the _Long Term Support_ (LTS) version (at time of writing, the version 20.9.0).
3. Open the archive and follow the instructions, choosing all default options...

To make sure everything is installed, open a `Terminal` prompt, i.e. `Applications/Utilities/Terminal.app` on Mac.

Type the following command to see the version of the installed Node.js:

```sh
node -v
```

Press "Enter" to execute the command and you should see:

```sh
v12.16.1
```

Then, type the following command to see the version of the installed Node Package Manager (aka `npm`, which is automatically installed with Node.js):

```sh
npm -v
```

Press "Enter" to execute the command and you should see:

```sh
10.1.0
```

![node-check](../assets/setting-up-environment/node-check.png)

::: info
Note that, depending on when you follow this tutorial, the actual versions you see in the terminal might change. This should not cause any issue with the rest of these tutorials.
:::

## Web Server

An important tool to have when developing Web pages, is a Web server that you can launch locally on your computer. In these tutorials, we will only need the most simple Web server: a server able to serve a file from its hard drive when the Web browser requests it.

A large number of options written in different programming languages are available to have such server. In this tutorials we will use [serve](https://www.npmjs.com/package/serve), a web server developed in the [Node.js](https://nodejs.org/) environment.

Open a new `Terminal` prompt and type:

```sh
npm install -g serve
```

Then, press `Enter` to execute the command.

::: info
This command basically tells the `npm` program (we just installed in the previous step) to install the `serve` package globally (cf. `-g`) on your computer.
:::

![install-serve](../assets/setting-up-environment/install-serve.png)

## Configure your Web browser

Lastly, we will configure your browser of choice to suspend its caching mechanisms when running in development.

### Google Chrome

1. Open the "Development tools" panel:  
"View > Developer > Developer Tools" or `Cmd + Shift + J`

2. Open the "Settings" panel by clicking on the wheel on the top right of the development panel:

![chrome-2](../assets/setting-up-environment/chrome-1.png)

3. In the "Preference" menu, check the "Disable cache (while DevTools is open)" option:

![chrome-2](../assets/setting-up-environment/chrome-2.png)

### Firefox

1. Open the "Development tools" panel:  
"Tools > Browser Tools > Web Developer Tools" or `Cmd + Option + I`

2. Open the "Settings" panel by clicking on the wheel on the top right of the development panel:

![firefox-1](../assets/setting-up-environment/firefox-1.png)

3. In the "Advanced Settings" section, check the "Disable HTTP cache (when toolbox is open)" option:

![firefox-2](../assets/setting-up-environment/firefox-2.png)


## Conclusion

Your system is now ready to use for development! In the next tutorial, we will develop a simple Web page, which will allow us to have a first hands-on with HTML, CSS and JavaScript.
