const clickAllInventory = require('./clickAllInventory');
const robot = require('robotjs');
const window = require('../client/window');

window.setupWindow();
window.openWindow();

robot.keyToggle('shift', 'down');
clickAllInventory();
robot.keyToggle('shift', 'up');
