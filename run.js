"use strict";

// define controller to keep run.js clean
const controller = require("./src/cli-controller.js");

// function to handle user input, it needs 1-2 parameters to work
const handleCliInput = (arg1, arg2) => {
  controller.helloWorld(arg1);
}

handleCliInput(process.argv[2], process.argv[3]);
