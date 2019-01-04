const robot = require('robotjs');
var shell = require('shelljs');
const fs = require('fs');
const imagemagick = require('imagemagick-native');
const window = require('./client/window');

for (let j = 0; j < 50; j++) {
  const img = robot.screen.capture(0, 0, 500, 500);
  for (let i = 0; i < 300; i++) {
    console.log(img.colorAt(i, i));
  }
}
