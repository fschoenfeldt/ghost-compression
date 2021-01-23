"use strict";

// define the function as a module, so we can import it in the run.js
module.exports.helloWorld = (args) => {
  console.log(`You entered: ${args}`);
};

// function that decides what do do
// remember the syntax: --(node run.js) FILENAME ARGUMENT--
module.exports.pass = (args) => {
  if (args.length > 0) {
    // only run this if args where provided
    console.log(`You provided the file ${args[0]}`);
    // !TODO check if file exists
    if (args.length > 1) {
      // if provided, run specific command (like --compress)
      console.log(`You requested to do >> ${args[1]} <<`);
      switch (args[1]) {
        case "--compress": // fall-through to case "compress"
        case "compress":
          if (args[2])
            console.log(`** Insert compressing here, using ${args[2]} **`);
          // !TODO insert compression via model here
          else
            console.log(`** Insert compressing here, using default level **`); // !TODO insert compression via model here
          break;
        case "--resize": // fall-through to case "resize"
        case "resize":
          if (args[2])
            console.log(`** Insert resizing here, using ${args[2]} **`);
          // !TODO insert resizing via model here
          else console.log(`** Insert resizing here **`); // !TODO insert resizing via model here
          break;
        default:
          console.log(`${args[1]} is not a valid parameter.`);
      }
    }
  } else {
    // warning the user that he did not provide a file. !TODO we might want to print out our apps syntax here.
    console.log(`You did not provide a file`);
  }
};
