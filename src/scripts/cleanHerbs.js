const window = require('../client/window');
const UI = require('../client/UI');
const screenshot = require('../helpers/saveRobotScreenshot');
const clickAllInventory = require('../helpers/clickAllInventory');

// screenshot.print();

window.setupWindow();
window.openWindow();
clickAllInventory();

// step 1 - setup window and UI)
// open settings and zoom all the way in
// open bank
// mouse to 9th tab and click

// step 2)
// mouse to castlewars bank spot (7th across, 5th down)
// click it with withdraw quantity all on
// close bank (esc

// step 3)
// move mouse to top left inventory spot,
// move through entire inventory, click each time, then move to next
// create functions to clean in a line straight down and straight up
// a loop that goes down -> right -> up right -> down up -> bank

// step 4) open the bank and click deposit inventory

//  repeat 2-4
