"use strict";

// define controller to keep run.js clean
const controller = require("./src/cli-controller.js");

// grab user input with destructuring, saving it into args
const [, , ...args] = process.argv;

// function to handle user input, args is the array containing the arguments
const handleCliInput = async (args) => {
  await controller.pass(args);
};

// run the handleCliInput function with the entered args
handleCliInput(args);
