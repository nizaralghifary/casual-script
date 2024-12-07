#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { flexing, execCmd } = require("./lib/utils");

const VERSION = "1.0.5";

class NzrInterpreter {
  constructor() {
    this.debugMode = false;
    this.fileLocate = null;
  }

  displayHelp() {
    console.log(`
Usage: nzr [options] <file>
Options:
  -v, --version       Show the current version of Nzr-Script.
  -h, --help          Display this help message.
  --debug             Show the generated JavaScript code before execution.
Examples:
  nzr                 Start the REPL mode (interactive shell).
  nzr example.nzr     Run the script from the file "example.nzr".
  nzr --debug example.nzr
                      Run the script and display the JavaScript code generated.
Commands in REPL:
  help                Display this help message.
  exit                Quit the REPL mode.
  [command]           Any valid Nzr-Script command to execute.
    `);
  }

  startRepl() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    console.log("Welcome to Nzr-Script Interpreter!");
    console.log("Type 'help' for available commands or 'exit' to quit.");
    rl.prompt();

    rl.on("line", (line) => {
      const input = line.trim().toLowerCase();

      switch (input) {
        case "exit":
          console.log("bye bye🤫🧏");
          rl.close();
          break;
        case "help":
          this.displayHelp();
          break;
        default:
          this.executeCommand(line.trim());
      }

      rl.prompt();
    }).on("close", () => process.exit(0));
  }

  executeCommand(command) {
    try {
      const result = flexing(command);
      execCmd(result);
    } catch (error) {
      console.error("Error: Invalid syntax or command.");
      console.error(`Details: ${error.message}`);
    }
  }

  parseArgs() {
    const args = process.argv.slice(2);
    const options = new Set(args.filter(arg => arg.startsWith("-")));
    const files = args.filter(arg => !arg.startsWith("-"));

    if (options.has("-v") || options.has("--version")) {
      console.log(`v${VERSION}`);
      process.exit(0);
    }

    if (options.has("-h") || options.has("--help")) {
      this.displayHelp();
      process.exit(0);
    }

    this.debugMode = options.has("--debug");

    if (files.length === 0) {
      return false;
    }

    this.fileLocate = path.resolve(files[0]);

    if (!fs.existsSync(this.fileLocate)) {
      console.error(`File "${this.fileLocate}" not found, please verify file location.`);
      process.exit(1);
    }

    return true;
  }

  run() {
    if (!this.parseArgs()) {
      this.startRepl();
    } else {
      this.executeFile();
    }
  }

  executeFile() {
    try {
      const input = fs.readFileSync(this.fileLocate, "utf-8");
      const result = flexing(input);

      if (this.debugMode) {
        console.log("Generated JavaScript Code:");
        console.log(result);
        console.log("\n--- Execution Output ---");
      }

      execCmd(result);
    } catch (error) {
      console.error("Error reading or processing the file.");
      console.error(`Details: ${error.message}`);
      process.exit(1);
    }
  }
}

const interpreter = new NzrInterpreter();
interpreter.run();