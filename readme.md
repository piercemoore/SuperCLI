SuperCLI
---

A lightweight library for Node.js that will help developers display nice, pretty, colored messages in a console windows.

#### How to use it

1) Require it

```` js
var scli = require('supercli');
````

2) Use that sheezy like this:

#### Simple logs
```` js
scli.log("An event happened that you shouldn't be worried about");
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


(Pierce Moore)[http://www.piercemoore.com]
