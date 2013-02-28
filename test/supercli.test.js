var scli = require('../lib/supercli');

scli.log("Running SuperCLI Test Suite!");

scli("This is an SCLI call without a specific function!");

scli.config.hideName();
scli.log("I am a sample log message!");
scli.log("I am one of multiple log messages!", "I am another of multiple log messages!");

scli.error("I am a sample error message!");
scli.error("I am one of multiple error messages!", "I am another of multiple error messages!");

scli.warn("I am a sample warn message!");
scli.warn("I am one of multiple warn messages!", "I am another of multiple warn messages!");

scli.ok("I am a sample ok message!");
scli.ok("I am one of multiple ok messages!", "I am another of multiple ok messages!");

scli.config.appName("Bananas");
scli.config.showName();
scli.success("I am a sample success message!");
scli.success("I am one of multiple success messages!", "I am another of multiple success messages!");

scli.put("Application Error","error", "App error 1", "App error 2", { error : { name : "App 3" } });
scli.put("App error 1","log", "App error 2", { error : { name : "App 3" } });

scli.config.set({
	messages : {
		log : "LOGGY LOG!",
		error : "You fucked up.",
		success : "Shit went right!",
		warning : "WATCH YO ASS FOO!",
		ok : "Shit went right!"
	}
});

scli.log("I should have a different log message");
scli.error("I should be different as well");
scli.success("It's all good here!");
scli.ok("Also good here!");
scli.warn("Warning message, ahoy!");

scli.$.red("This text should be light red");
scli.$.green("This text should be light green");
scli.$.yellow("This text should be light yellow");
scli.$.blue("This text should be light blue");
scli.$.magenta("This text should be light magenta");
scli.$.cyan("This text should be light cyan");
scli.$.white("This text should be light white");
scli.$.RED("This text should be bold red");
scli.$.GREEN("This text should be bold green");
scli.$.YELLOW("This text should be bold yellow");
scli.$.BLUE("This text should be bold blue");
scli.$.MAGENTA("This text should be bold magenta");
scli.$.CYAN("This text should be bold cyan");
scli.$.WHITE("This text should be bold white");