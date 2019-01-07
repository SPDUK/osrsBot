const clickAllInventory = require('./clickAllInventory');
const robot = require('robotjs');
const window = require('../client/window');

window.setupWindow();
window.openWindow();

// just for debugging incase the window isn't open/setup when using console
setTimeout(() => {
  robot.keyToggle('shift', 'down');
  clickAllInventory();
  robot.keyToggle('shift', 'up');
}, 100);
