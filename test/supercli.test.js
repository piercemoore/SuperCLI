var scli = require('../lib/supercli');

scli.log("Running SuperCLI Test Suite!");

scli("This is an SCLI call without a specific function!");

scli.log("I am a sample log message!");
scli.log("I am one of multiple log messages!", "I am another of multiple log messages!");

scli.error("I am a sample error message!");
scli.error("I am one of multiple error messages!", "I am another of multiple error messages!");

scli.warn("I am a sample warn message!");
scli.warn("I am one of multiple warn messages!", "I am another of multiple warn messages!");

scli.ok("I am a sample ok message!");
scli.ok("I am one of multiple ok messages!", "I am another of multiple ok messages!");

scli.success("I am a sample success message!");
scli.success("I am one of multiple success messages!", "I am another of multiple success messages!");
