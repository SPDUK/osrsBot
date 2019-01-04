const robot = require('robotjs');
var shell = require('shelljs');
const window = require('./window.js');
const fs = require('fs');
const imagemagick = require('imagemagick-native');

// const [rsX, rsY] = window.getWindowPos();
// window.openWindow();
// robot.moveMouse(rsX + window.width, rsY + window.height);

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
  useSpecial() {
    hotkeys.openCombat();
  }
};

const UI = {
  hotkeys,
  actions
};

module.exports = UI;
