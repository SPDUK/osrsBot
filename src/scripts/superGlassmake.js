const shelljs = require('shelljs');
const robot = require('robotjs');
const window = require('../client/window');
const UI = require('../client/UI');
const humanMouse = require('../helpers/humanMouse');
const randomNumber = require('../helpers/randomNumber');
const randomMouseMove = require('../helpers/randomMouseMove');
const randomMouseClick = require('../helpers/randomMouseClick');
const randomOvershoot = require('../helpers/randomOvershoot');
const AFKcheck = require('../helpers/AFKcheck');
const screenshot = require('../helpers/saveRobotScreenshot');
const bank = require('../helpers/bank');

const [rsX, rsY] = window.getWindowPos();

function moveToItem(x, y) {
  if (Math.random() > 0.7) {
    randomMouseMove(rsX + x, rsY + y);
  }
  const [itemX, fakeY] = randomNumber.randomXY(x, y, 28, 28);
  humanMouse.moveSmall(rsX + itemX, rsY + fakeY);
}

function getXItems() {
  const pos = robot.getMousePos();

  // using random because it can be either left or right of the mouse, and we want to get a random y between 65 and 75.
  const randX = randomNumber.randomRange(pos.x, 101);
  const randY = randomNumber.randomRange(pos.y + 70, 5);

  humanMouse.moveSmall(randX, randY);
  randomMouseClick();
}
function getItems() {
  moveToItem(364, 157);
  randomMouseClick();
  randomMouseClick();
  moveToItem(412, 158);
  randomMouseClick('right');
  getXItems();
}

function clickGlassmake() {
  randomOvershoot(rsX + 556, rsY + 316, 15, 12);
  randomMouseClick();
}

function clickDeposit() {
  randomOvershoot(rsX + 429, rsY + 300, 29, 29);
  robot.setMouseDelay(randomNumber.medium());
  randomMouseClick();
}

// used for timing the bot to turn it off, just turns off after about 5 hours
let running = true;
const startTime = Math.abs(new Date());

function craftLoop() {
  // if we have been running for over 4 hours and 1 minute + a random amount of minutes, turn the bot off
  const loopTime = Math.abs(new Date());
  const diff = startTime - loopTime;
  const minDiff = Math.floor(diff / 1000 / 60);
  if (minDiff > 240 + Math.floor(Math.random() * 45) + 1) {
    shelljs.exec('xdotool getwindowfocus windowkill');
    robot.setKeyboardDelay(4000);
    robot.setMouseDelay(4000);
    running = false;
    return;
  }

  if (!AFKcheck()) {
    robot.setKeyboardDelay(randomNumber.veryBig());
  }
  UI.hotkeys.closeBank();

  // go "AFK" randomly, else set a medium delay
  if (!AFKcheck()) {
    robot.setMouseDelay(randomNumber.medium());
  }
  clickGlassmake();
  // go "AFK" randomly, else set a medium delay
  if (!AFKcheck()) {
    robot.setMouseDelay(Math.floor(Math.random() * 2000) + 3600);
  }
  bank.openBank(bank.banks.GE);
  if (!AFKcheck()) {
    robot.setMouseDelay(Math.floor(Math.random() * 1600) + 2600);
  }
  clickDeposit();
  if (!AFKcheck()) {
    robot.setMouseDelay(randomNumber.medium());
  }
  getItems();
}
// setup game window
window.setupWindow();
window.openWindow();
UI.hotkeys.openMagic();

// // open bank and get items for the first time
bank.openBank(bank.banks.GE);
robot.setMouseDelay(Math.floor(Math.random() * 2000) + 1300);
getItems();

//
while (running) {
  craftLoop();
}
