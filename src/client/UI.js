const robot = require('robotjs');
const window = require('./window');
const randomNumber = require('../helpers/randomNumber');

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
  closeBank() {
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
    window.openWindow();

    const [rsX, rsY] = window.getWindowPos();
    const img = robot.screen.capture(rsX + 585, rsY + 136, 8, 1);
    for (let i = 0; i < 8; i++) {
      const color = img.colorAt(i, 0);
      if (specialColors.includes(color)) {
        UI.hotkeys.openCombat();
        // return a random x or y point on the special bar that is clickable
        const [randX, randY] = randomNumber.randomXY(570, 410, 125, 15);

        // over or undershoot randomly by 15 pixels positive or negative
        const fakeX = randomNumber.randomRange(rsX + randX, 15);
        const fakeY = randomNumber.randomRange(rsY + randY, 15);
        robot.moveMouseSmooth(fakeX, fakeY);
        robot.setMouseDelay(randomNumber.small());

        // move to the actual part we wanted to initially click and click it after a medium delay
        robot.moveMouseSmooth(rsX + randX, rsY + randY);
        robot.setMouseDelay(randomNumber.medium());
        robot.mouseClick('left', false);

        // re open the inventory after 200-600ms
        setTimeout(() => {
          UI.hotkeys.openInventory();
        }, randomNumber.veryBigRand());
        // don't continue the loop
        break;
      } else {
        console.log(`special not ready || color: ${color}`);
      }
    }
  }
};

const UI = {
  hotkeys,
  actions
};

module.exports = UI;
