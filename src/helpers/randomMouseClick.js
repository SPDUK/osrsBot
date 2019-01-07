const robot = require('robotjs');
const randomNumber = require('./randomNumber');

module.exports = function randomMouseClick(button = 'left') {
  // set the click delay between pressing down and up to a random number
  const getClickDelay = () => {
    const rand = Math.random();
    if (rand > 0.98) return randomNumber.veryBigRand();
    if (rand > 0.9) return randomNumber.big();
    if (rand > 0.8) return randomNumber.medium();
    if (rand > 0.6) return randomNumber.verySmall();
    return randomNumber.small();
  };
  robot.setMouseDelay(getClickDelay());
  robot.mouseToggle('down', button);
  robot.setMouseDelay(getClickDelay());
  robot.mouseToggle('up', button);
};
