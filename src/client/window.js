const robot = require('robotjs');
var shell = require('shelljs');
const fs = require('fs');

const window = {
  id: Number(shell.exec('xdotool search --name Runescape').stdout),

  windowPos() {
    const pos = shell.exec(`xdotool getwindowgeometry ${this.id}`).stdout;
    // get the x and y position where the window begins
    const [x, y] = pos
      .split('\n')[1]
      .split(' ')[3]
      .split(',');

    return [x - 8, y - 40];
  },

  // sizes window to the correct size for classic view
  setupWindow() {
    // needs and extra 30~ pixels for non members
    shell.exec(`xdotool windowsize ${this.id} 768 505`);
  },

  openWindow() {
    shell.exec(`xdotool windowactivate ${this.id}`);
  },

  minWindow() {
    shell.exec(`xdotool windowminimize ${this.id}`);
  },

  screenshot() {
    const [x, y] = this.windowPos();
    shell.exec(`import -window root -crop ${x}x${y}+0-0 ./screenshots/${Date.now()}.png -screen`);
  }
};

module.exports = window;
