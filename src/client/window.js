const shell = require('shelljs');

const window = {
  id: Number(shell.exec('xdotool search --name Old').stdout),
  height: 505,
  width: 768,

  getWindowPos() {
    const pos = shell.exec(`xdotool getwindowgeometry ${this.id}`).stdout;
    // get the x and y position where the window begins
    const [x, y] = pos
      .split('\n')[1]
      .split(' ')[3]
      .split(',');

    // depends on window title bar, x-10 y-45 is for yaru on ubuntu GNOME, for KDE it doesn't need anything, depends on distro I suppose.
    return [Number(x), Number(y)];
  },

  // sizes window to the correct size for classic view
  setupWindow() {
    // needs and extra 30~ pixels for non members accounts
    shell.exec(`xdotool windowsize ${this.id} 768 505`);
  },

  openWindow() {
    shell.exec(`xdotool windowactivate ${this.id}`);
  },

  minWindow() {
    shell.exec(`xdotool windowminimize ${this.id}`);
  },

  screenshot() {
    shell.exec(`import -window ${this.id} ./screenshots/${Date.now()}.png`);
  },
};

module.exports = window;
