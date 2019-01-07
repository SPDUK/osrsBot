// Warning: VERY SLOW. Will take 20 seconds to complete a full screenshot.

const robot = require('robotjs');
const window = require('../client/window');
const Jimp = require('jimp');

/** @module
   Should not be called manually and is just a helper function.
   */
function createPngFromBuffer(jImg, rImg, screen_x, screen_y) {
  for (var x = 0; x < screen_x; x++) {
    for (var y = 0; y < screen_y; y++) {
      // hex is a string, rrggbb format
      var hex = rImg.colorAt(x, y);
      // Jimp expects an Int, with RGBA data,
      // so add FF as 'full opaque' to RGB color
      var num = parseInt(hex + 'ff', 16);
      // Set pixel manually
      jImg.setPixelColor(num, x, y);
    }
  }
  return jImg;
}

/** @module
  If no params are given it will take a full-window screenshot.
  Creates an image from the given params, used for testing and seeing what the robot sees at any given params.
  @param {Number} x The x position relative to 0,0 on the runescape window
  @param {Number} y The y position relative to 0,0 on the runescape window
  @param {Number} w The height of the output image
  @param {Number} h The Width of the output image
   */
function print(x = 0, y = 0, w = 768, h = 505) {
  const [rsX, rsY] = window.getWindowPos();
  const [newX, newY] = [rsX + x, rsY + y];
  const jImg = new Jimp(w, h);
  const rImg = robot.screen.capture(newX, newY, w, h);
  const newImg = createPngFromBuffer(jImg, rImg, w, h);

  newImg.write(`./screenshots/ROBOT_${Date.now()}.png`);
}

module.exports = print;
