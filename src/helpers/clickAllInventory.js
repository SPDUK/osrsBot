const robot = require('robotjs');
const window = require('../client/window');
const randomNumber = require('../helpers/randomNumber');
const randomMouseMove = require('../helpers/randomMouseMove');
const [rsX, rsY] = window.getWindowPos();

// because mousekeys are allowed we don't need to randomize the left/right movements, they can just be set at a fixed amount of pixels, but the amount of time between clicks and moving the mouse should be randomized

function moveTopLeft() {
  const [randX, randY] = randomNumber.randomXY(rsX + 568, rsY + 218, 20, 20);

  // randomly overshoot
  if (Math.random() > 0.6) {
    const overshootX = randomNumber.randomRange(randX, 130);
    const overshootY = randomNumber.randomRange(randY, 130);

    robot.moveMouseSmooth(overshootX, overshootY);
    robot.setMouseDelay(randomNumber.small());
  }

  // move to the correct position
  robot.moveMouseSmooth(randX, randY);
  robot.setMouseDelay(randomNumber.mediumRand());
}

function moveRight() {
  const pos = robot.getMousePos();
  robot.setMouseDelay(randomNumber.mediumRand());
  robot.moveMouseSmooth(pos.x + 43, pos.y);
}
function clickLine(direction) {
  const pos = robot.getMousePos();
  let n = 0; // amount of pixels to move, inv entory slots are 25px

  for (let i = 0; i < 7; i++) {
    // randomize delay for every movement
    let delay = randomNumber.medium();
    if (Math.random() > 0.3) {
      delay = randomNumber.big();
    }
    robot.mouseClick();
    robot.setMouseDelay(delay);
    n += 36 * direction;
    if (i !== 6) {
      robot.moveMouseSmooth(pos.x, pos.y + n);
    }
  }
}
// 1 means down, -1 means up
module.exports = function clickAllInventory() {
  moveTopLeft();
  clickLine(1);
  moveRight();
  clickLine(-1);
  moveRight();
  clickLine(1);
  moveRight();
  clickLine(-1);

  // for some reason robot.setMouseDelay isn't working
  // move the mouse after finishing as to simulate bumping the mouse off the end position before moving on
  const delay = Math.random() > 0.5 ? randomNumber.huge() : randomNumber.veryBigRand();
  setTimeout(() => {
    const pos = robot.getMousePos();
    randomMouseMove(pos.x, pos.y);
  }, delay);
};
