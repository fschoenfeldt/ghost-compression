"use strict";

const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const fs = require("fs");

module.exports.compress = async (options) => {
  const { sourcePath } = options;
  // Check if file exists
  fs.promises
    .access(sourcePath)
    .then(compressImage(options))
    .catch((err) => console.error(err));
};

const compressImage = async ({ sourcePath, destinationPath }) => {
  const compressed_image = await imagemin([sourcePath], {
    destination: destinationPath,
    plugins: [imageminMozjpeg()],
  });

  console.debug(compressed_image);
};
