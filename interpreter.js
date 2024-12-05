#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const { flexing, execCmd } = require("./lib/utils");

const version = "1.0.0"; 
let fileLocate = null;

const handleInputFromTerminal = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
  });

  console.log("Welcome to Casual-Script Interpreter! Type 'exit' to quit.");
  rl.prompt();

  rl.on("line", (line) => {
    if (line.trim().toLowerCase() === "exit") {
      console.log("bye bye🤫🧏");
      rl.close();
      return;
    }

    try {
      const result = flexing(line.trim());
      execCmd(result); 
    } catch (error) {
      console.error("Error: Invalid syntax or command.");
      console.error(`Details: ${error.message}`);
    }

    rl.prompt();
  });
};

const parseArgs = () => {
  const args = process.argv;

  if (args.includes("-v") || args.includes("--version")) {
    console.log(`v${version}`);
    process.exit(0); 
  }

  if (args.length < 3) {
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  return true;
};

if (!parseArgs()) {
  handleInputFromTerminal();
} else {
  try {
    const input = fs.readFileSync(fileLocate, "utf-8"); 
    const result = flexing(input);
    execCmd(result); 
  } catch (error) {
    console.error("Error reading or processing the file.");
    console.error(`Details: ${error.message}`);
  }
}