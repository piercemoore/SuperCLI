SuperCLI  [![Build Status](https://travis-ci.org/piercemoore/SuperCLI.png?branch=master)](https://travis-ci.org/piercemoore/SuperCLI)
===
A lightweight library for Node.js that will help developers display nice, pretty, colored messages in the console.

Note for NPM Viewers: 
---
For some reason, NPM has not implemented anything more than the most basic Markdown rendering engine for these readme files. As such, the API reference tables at the bottom of this readme are literally unusable. It's much better to view this readme on GitHub directly here: [GitHub Readme](https://github.com/piercemoore/SuperCLI)

How to use it
---

1) Require it

```` js
var scli = require('supercli');
````

2) Use that sheezy like this:

#### At its **most** simple, you can just send messages directly from that.
```` js
scli("This will send a log message to the console");
````

Remember: Log *as many* things as you want!
---
Don't worry about whether the message is a string, object, integer, whatever. It doesn't matter at all. Any arguments you pass to SuperCLI will get logged properly, no matter what. It's all about rapid development, baby!

```` js
scli("String", 42, false, ["a", 1, {foo : bar}], { baz : { bax : zap } });
````
Outputs
````
[ SuperCLI: Log ] String 42 false [a, 1, {foo : bar}] { baz : { bax : zap } }
````
*sigh* Yeah, I know. Soak it up, baby. SuperCLI gon' be gooood to you. 

Alright let's get to the good stuff.
---

#### Simple logs
```` js
scli.log("An event happened that you shouldn't be worried about");
scli.lg("Save yourself a whole letter when calling this! You're welcome.");
````

> **Rather Important Note:**
As far as I can tell, most of the time people just need basic log messages. The above 3 functions **will** make that happen, and are **identical**. I just tried to get more options for people to be comfortable.
````js
scli("Your log message here!");
scli.log("Your log message here!");
scli.lg("Your log message here!");
````
So yeah. Just giving you a heads up. Because I'm a nice guy like that. Anyway, carry on.

#### Warnings
```` js
scli.warn("Something happened that wasn't an error that you should be worried about.";
````

#### Errors
```` js
scli.error("Yeah, something actually went wrong here :(");
````

#### Success / OK
```` js
scli.ok("This is a message telling you it is all good in the hood!");
scli.success("This is an identical message, just using the word success to make people feel better");
````
> **Note:**
Similar to the `log()` functions above, these two success functions have identical output.
```` js
scli.ok("Success message");
scli.success("Success message");
````

That's not enough for you, eh? Ugh. Fine.
---

#### Extensible configuration options

The configuration file looks a little like this
```` js
var config = {
  nameVisible : true,
  app : {
    name : "SuperCLI",
    showName : true
  },
  messages : {
    log : "Log",
    error : " Error",
    success : "Success",
    warning : "Warning",
    ok : "OK"
  }
};
````

And **HERE** is how you can make this module work better for you.

#### Change the application name that shows in log messages
Right now, all messages are prepended with `SuperCLI` when they are displayed. If you want to set that to your own application name, and I highly recommend that you do, you can run this command:

```` js
scli.config.appName("Your App Name Here");
````

Which will change the output of `scli.log("Your log here");` to
```` 
[ Your App Name Here: Log ] Your log here
````

#### If you want to just hide the name entirely, you can!

```` js
scli.config.hideName();
````

Which will change the output of `scli.log("Your log here");` to
````
[ Log ] Your log here
````

#### And if you already hid it but want to bring it back, you can do that too!

```` js
scli.config.showName();
````

Which will change the output of `scli.log("Your log here");` back to
````
[ Your App Name Here: Log ] Your log here
````

#### Change the message names!
Want to get crazy and change the default words that are used in console messages? Being a generous guy, I am going to let you do that as well.

```` js
scli.config.set({
  messages : {
    log : "LOGGY LOG!",
    error : "You fucked up.",
    success : "Shit went right!",
    warning : "WATCH YO ASS FOO!",
    ok : "Shit went right!"
  }
});
````

Now, running a basic `scli.log("Your log message here");` command (assuming you already changed your application name) will output:
````
[ Your App Name Here: LOGGY LOG! ] Your log message here
````

Is that seriously still not enough? YOU are a pain in the ass. Fine.
---

#### Directly access color functions using `$`.

> **Note:** The lowercase functions are regular text, the UPPERCASE functions are the bolded versions

*IMPORTANT:* Unlike the standard calls, the direct `$` color functions only accept a **single string** as an argument. No objects, no arrays, none of it. Just one single thing that you can put in the center of a string. Sorry.

````
scli.$.red("All this text will be red");
scli.$.MAGENTA("All this text will be bolded magenta");
````

Here's the full list of colors and their functions:

Color | Light | Bold/Bright
-------|-------|--------
Red | `scli.$.red()` | `scli.$.RED()`
Green | `scli.$.green()` | `scli.$.GREEN()`
Yello | `scli.$.yellow()` | `scli.$.YELLOW()`
Blue | `scli.$.blue()` | `scli.$.BLUE()`
Magenta | `scli.$.magenta()` | `scli.$.MAGENTA()`
Cyan | `scli.$.cyan()` | `scli.$.CYAN()`
White | `scli.$.white()` | `scli.$.WHITE()`


Full API Reference
---

> All functions below assume that you have already required SuperCLI as `var scli = require('supercli');`

Function | Parameters | Output Color | Purpose
------|------|-------|-------
`scli()` | Anything | Cyan | Standard log message
`scli.log()` | Anything | Cyan | Standard log message
`scli.lg()` | Anything | Cyan | Standard log message
`scli.ok` | Anything | Green | Success message
`scli.success()` | Anything | Green | Success message
`scli.error()` | Anything | Red | Error message
`scli.warn()` | Anything | Yellow | Warning message
`scli.config.appName()` | `String`: New Name | -- | Sets application name used in output
`scli.config.set()` | `Object`: New Settings | -- | Changes configuration object. See above!
`scli.config.hideName()` | -- | -- | Removes application name from future console output
`scli.config.showName()` | -- | -- | Shows application name in future console output
`scli.$.red()` | `String`: Message | Light Red | Log message without frills in one color
`scli.$.RED()` | `String`: Message | Bright/Bold Red | Log message without frills in one color
`scli.$.green()` | `String`: Message | Light Green | Log message without frills in one color
`scli.$.GREEN()` | `String`: Message | Bright/Bold Green | Log message without frills in one color
`scli.$.yellow()` | `String`: Message | Light Yellow | Log message without frills in one color
`scli.$.YELLOW()` | `String`: Message | Bright/Bold Yellow | Log message without frills in one color
`scli.$.blue()` | `String`: Message | Light Blue | Log message without frills in one color
`scli.$.BLUE()` | `String`: Message | Bright/Bold Blue | Log message without frills in one color
`scli.$.magenta()` | `String`: Message | Light Magenta | Log message without frills in one color
`scli.$.MAGENTA()` | `String`: Message | Bright/Bold Magenta | Log message without frills in one color
`scli.$.cyan()` | `String`: Message | Light Cyan | Log message without frills in one color
`scli.$.CYAN()` | `String`: Message | Bright/Bold Cyan | Log message without frills in one color
`scli.$.white()` | `String`: Message | Light White | Log message without frills in one color
`scli.$.WHITE()` | `String`: Message | Bright/Bold White | Log message without frills in one color


#### [Pierce Moore](http://www.piercemoore.com)  
Email : **[Pierce@PierceMoore.com](mailto:pierce@piercemoore.com)**  
Twitter : **[@kiapierce](https://twitter.com/kiapierce)**
