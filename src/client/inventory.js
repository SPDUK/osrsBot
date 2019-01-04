const robot = require('robotjs');
var shell = require('shelljs');
const window = require('./window.js');
const fs = require('fs');
const imagemagick = require('imagemagick-native');

const [rsX, rsY] = window.windowPos();
robot.moveMouse(rsX, rsY);

const img = fs.readFileSync('./screenshots/game.png');

console.log(pixels);
