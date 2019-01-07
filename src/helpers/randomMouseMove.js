const robot = require('robotjs');
const randomNumber = require('./randomNumber');
const humanMouse = require('../helpers/humanMouse');

module.exports = function randomMouseMove(x, y) {
  // vary the delays between moving to overX and over Y
  const overX = randomNumber.randomRange(x, randomNumber.small());
  const overY = randomNumber.randomRange(y, randomNumber.small());
  humanMouse.moveSmall(overX, overY);

  // randomly throw in extra over/undershoot for now
  if (Math.random() > 0.7) {
    const pos = robot.getMousePos();
    robot.setMouseDelay(randomNumber.small());
    const overX = randomNumber.randomRange(pos.x, randomNumber.small());
    const overY = randomNumber.randomRange(pos.y, randomNumber.small());
    humanMouse.moveSmall(overX, overY);
  }

  if (Math.random() > 0.9) {
    const pos = robot.getMousePos();
    robot.setMouseDelay(randomNumber.small());

    const overX = randomNumber.randomRange(pos.x, randomNumber.small());
    const overY = randomNumber.randomRange(pos.y, randomNumber.small());
    humanMouse.moveSmall(overX, overY);
  }
};
