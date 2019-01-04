const robot = require('robotjs');
const window = require('./window');
const randomNumber = require('../helpers/randomNumber');

// const [rsX, rsY] = window.getWindowPos();
// window.openWindow();
// robot.moveMouse(rsX + window.width, rsY + window.height);

const UIElements = {
  // special bar
  // hp circle
  // prayer circle
};
// must rebind the logout key from default (none) to f12,
const hotkeys = {
  openInventory() {
    robot.keyTap('escape');
  },
  openCombat() {
    robot.keyTap('f1');
  },
  openStats() {
    robot.keyTap('f2');
  },
  openQuests() {
    robot.keyTap('f3');
  },

  openEquipment() {
    robot.keyTap('f4');
  },
  openPrayer() {
    robot.keyTap('f5');
  },
  openMagic() {
    robot.keyTap('f6');
  },
  openClanChat() {
    robot.keyTap('f7');
  },
  openFriends() {
    robot.keyTap('f8');
  },
  openAccount() {
    robot.keyTap('f9');
  },
  openSettings() {
    robot.keyTap('f10');
  },
  openEmotes() {
    robot.keyTap('f11');
  },
  openLogout() {
    robot.keyTap('f12');
  }
};

const actions = {
  //TODO: break this up into smaller functions
  useSpecial() {
    // colors that the UI uses at the very top of the special mater, if we find one in those pixels at the top we use special.
    const specialColors = ['0d6f85', '086176', '1e96b3'];

    const [rsX, rsY] = window.getWindowPos();
    const img = robot.screen.capture(rsX + 585, rsY + 136, 8, 1);
    for (let i = 0; i < 8; i++) {
      const color = img.colorAt(i, 0);
      if (specialColors.includes(color)) {
        UI.hotkeys.openCombat();
        robot.setMouseDelay(randomNumber.small());
        // return a random x or y point on the special bar that is clickable
        const randX = () => Math.floor(Math.random() * 125) + 570;
        const randY = () => Math.floor(Math.random() * 15) + 410;

        // over or undershoot randomly by 20 pixels positive or negative
        const fakeX = randomNumber.randomRange(rsX + randX(), 20);
        const fakeY = randomNumber.randomRange(rsY + randY(), 20);

        robot.moveMouseSmooth(fakeX, fakeY);
        robot.setMouseDelay(randomNumber.verySmall());

        const [clickX, clickY] = [rsX + randX(), rsY + randY()];
        robot.moveMouseSmooth(clickX, clickY);
        robot.setMouseDelay(randomNumber.medium());
        robot.mouseClick('left', false);
        robot.setMouseDelay(randomNumber.small());
        // move mouse afterwards?
        break;
      }
    }
  }
};

const UI = {
  hotkeys,
  actions
};

module.exports = UI;
