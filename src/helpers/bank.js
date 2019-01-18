const randomMouseClick = require('./randomMouseClick');
const randomOvershoot = require('./randomOvershoot');

const window = require('../client/window');

const [rsX, rsY] = window.getWindowPos();

// assumes you are facing north fully zoomed in
const castleWars = {
  x: 360,
  y: 248,
  xRange: 70,
  yRange: 50,
};

// assumes you are zoomed in and hold down arrow to get the most of the  bank booth on screen, standing on the leftmost square while facing the bankers
const GE = {
  x: 192,
  y: 152,
  xRange: 183,
  yRange: 88,
};
// a kind of tight range but shouldn't error when camera spins.
const PC = {
  x: 200,
  y: 68,
  xRange: 40,
  yRange: 40,
};
function openBank(bank) {
  randomOvershoot(rsX + bank.x, rsY + bank.y, bank.xRange, bank.yRange);
  randomMouseClick();
}

const banks = { castleWars, GE, PC };
module.exports = { banks, openBank };
