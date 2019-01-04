const robot = require('robotjs');
var shell = require('shelljs');
const fs = require('fs');
const imagemagick = require('imagemagick-native');
const window = require('./client/window');
const UI = require('./client/UI');

window.setupWindow();
const [x, y] = window.getWindowPos();

window.openWindow();
UI.hotkeys.openInventory();
setTimeout(() => {
  UI.hotkeys.openAccount();
}, 1500);
