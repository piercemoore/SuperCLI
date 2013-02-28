SuperCLI
---

A lightweight library for Node.js that will help developers display nice, pretty, colored messages in a console windows.

#### How to use it

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

````
scli.$.red("All this text will be red);
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




#### [Pierce Moore](http://www.piercemoore.com)  
Email : **[Pierce@PierceMoore.com](mailto:pierce@piercemoore.com)**  
Twitter : **[@kiapierce](https://twitter.com/kiapierce)**
