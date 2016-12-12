var Compiler = require("./Compiler");

var compiler = new Compiler('ios', process.env.TARGET, console);
compiler.cleanDirectory();
compiler.build();
compiler.zip();
