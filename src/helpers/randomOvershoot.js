const robot = require('robotjs');
const randomNumber = require('./randomNumber');
const humanMouse = require('./humanMouse');
/** @module
 * A function for very randomly over/undershooting randomly.
 * @param x the x position you wish to move to
 * @param y the x position you wish to move to
 * @param xRange the maximum x position the mouse should move to
 * @param yRange the maximum y position the mouse should move to
 */
module.exports = function randomOvershoot(x, y, xRange, yRange) {
  const rand = Math.random();
  const [randX, randY] = randomNumber.randomXY(x, y, xRange, yRange);

  if (rand > 0.94) {
    const fakeX = randomNumber.randomRange(randX, randomNumber.small());
    const fakeY = randomNumber.randomRange(randY, randomNumber.small());
    humanMouse.moveSmall(fakeX, fakeY);
    robot.setMouseDelay(randomNumber.veryBig());
  } else if (rand > 0.8) {
    const fakeX = randomNumber.randomRange(randX, randomNumber.verySmall());
    const fakeY = randomNumber.randomRange(randY, randomNumber.verySmall());
    humanMouse.moveSmall(fakeX, fakeY);
    robot.setMouseDelay(randomNumber.small());
  } else if (rand > 0.6) {
    const fakeX = randomNumber.randomRange(randX, randomNumber.veryBigRand());
    const fakeY = randomNumber.randomRange(randY, randomNumber.medium());
    humanMouse.moveSmall(fakeX, fakeY);
    robot.setMouseDelay(randomNumber.medium());
  } else if (rand > 0.4) {
    const fakeX = randomNumber.randomRange(randX, randomNumber.medium());
    const fakeY = randomNumber.randomRange(randY, randomNumber.medium());
    humanMouse.moveSmall(fakeX, fakeY);
    robot.setMouseDelay(randomNumber.mediumRand());
  }
  humanMouse.moveSmall(randX, randY);
  robot.setMouseDelay(randomNumber.medium());
};
