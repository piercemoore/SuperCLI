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


#### Simple logs
```` js
scli.log("An event happened that you shouldn't be worried about");
scli.lg("Save yourself a whole letter when calling this! You're welcome.");
````

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

If you want to just hide the name entirely, you can!

```` js
scli.config.hideName();
````

And if you already hid it but want to bring it back, you can do that too!

```` js
scli.config.showName();
````


(Pierce Moore)[http://www.piercemoore.com]
