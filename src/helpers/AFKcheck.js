const robot = require('robotjs');
const randomNumber = require('./randomNumber');
const randomMouseMove = require('./randomMouseMove');

module.exports = function AFK() {
  // set the click delay between pressing down and up to a random number
  const rand = Math.random();
  if (rand > 0.995) {
    robot.setMouseDelay(randomNumber.AFK());
    const pos = robot.getMousePos();
    randomMouseMove(pos.x, pos.y);
    return true;
  }
  if (rand > 0.987) {
    robot.setMouseDelay(randomNumber.veryBigRand);
    const pos = robot.getMousePos();
    randomMouseMove(pos.x, pos.y);
    return true;
  }
};
