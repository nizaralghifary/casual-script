#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const { flexing, execCmd } = require("./lib/utils");

const version = "1.0.2";
let fileLocate = null;
let debugMode = false;

const displayHelp = () => {
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
};

// Repl Mode
const handleInputFromTerminal = () => {
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

    if (input === "exit") {
      console.log("bye bye🤫🧏");
      rl.close();
      return;
    }

    if (input === "help") {
      displayHelp();
    } else {
      try {
        const result = flexing(line.trim());
        execCmd(result);
      } catch (error) {
        console.error("Error: Invalid syntax or command.");
        console.error(`Details: ${error.message}`);
      }
    }

    rl.prompt();
  });
};

const parseArgs = () => {
  const args = process.argv.slice(2);
  const options = args.filter((arg) => arg.startsWith("-"));
  const files = args.filter((arg) => !arg.startsWith("-"));

  if (options.includes("-v") || options.includes("--version")) {
    console.log(`v${version}`);
    process.exit(0);
  }

  if (options.includes("-h") || options.includes("--help")) {
    displayHelp();
    process.exit(0);
  }

  if (options.includes("--debug")) {
    debugMode = true;
  }

  if (files.length === 0) {
    return false;
  }

  fileLocate = files[0];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${fileLocate}" not found, please verify file location.`);
    process.exit(1);
  }

  return true;
};

if (!parseArgs()) {
  handleInputFromTerminal();
} else {
  try {
    const input = fs.readFileSync(fileLocate, "utf-8");
    const result = flexing(input);

    if (debugMode) {
      console.log("Generated JavaScript Code:");
      console.log(result);
    }

    execCmd(result);
  } catch (error) {
    console.error("Error reading or processing the file.");
    console.error(`Details: ${error.message}`);
    process.exit(1);
  }
}