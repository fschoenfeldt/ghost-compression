"use strict";

const compressionModel = require("./compression-model.js");

// function that decides what do do
// remember the syntax: `node run.js [sourceFile] [desinationFile] [--compress/--resize] [compression-level]`
module.exports.pass = async (args) => {
  const errors = await checkArgsForErrors(args);

  if (errors) {
    console.error(errors);
  } else {
    const [sourcePath, destinationPath, command, ...options] = args;
    // only run this if args where provided
    switch (command) {
      case "--compress": // fall-through to case "compress"
      case "compress":
        compressionModel.compress({
          sourcePath: sourcePath,
          destinationPath: destinationPath,
          options: options,
        });
        break;
      case "--resize": // fall-through to case "resize"
      case "resize":
        console.log(`** Insert resizing here, using options ${options} **`);
        break;
      default:
        console.log(
          `${command} is not a valid action, either use --resize or --compress.`
        );
    }
  }
};

const checkArgsForErrors = async (args) => {
  let errors = "";
  if (args.length < 1) {
    // warning the user that he did not provide a source file. !TODO we might want to print out our apps syntax here.
    errors += `You did not provide a source file. `;
  }
  if (args.length < 2) {
    // warning the user that he did not provide a destination file. !TODO we might want to print out our apps syntax here.
    errors += `You did not provide a destination file. `;
  }
  if (args.length < 3) {
    // warning the user that he did not provide an action
    errors += ` You didn't provide an action, such as --compress or --resize. `;
  }

  return errors;
};
