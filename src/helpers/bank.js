const randomMouseClick = require('./randomMouseClick');
const randomOvershoot = require('./randomOvershoot');

const window = require('../client/window');

const [rsX, rsY] = window.getWindowPos();

// assumes you are facing north fully zoomed in
const castleWars = {
  x: 360,
  y: 205,
  xRange: 70,
  yRange: 50,
};

// assumes you are zoomed in and hold down arrow to get the most of the  bank booth on screen, standing on the leftmost square while facing the bankers
const GE = {
  x: 158,
  y: 128,
  xRange: 220,
  yRange: 110,
};

function openBank(bank) {
  randomOvershoot(rsX + bank.x, rsY + bank.y, bank.xRange, bank.yRange);
  randomMouseClick();
}

const banks = { castleWars, GE };
module.exports = { banks, openBank };
