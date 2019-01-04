const window = require('./client/window');
const UI = require('./client/UI');

window.setupWindow();

window.openWindow();

// our bot can now detect if our special attack is ready and will use it, yay
UI.actions.useSpecial();
