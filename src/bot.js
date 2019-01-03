const robot = require('robotjs');
var shell = require('shelljs');

const id = Number(shell.exec('xdotool search --name runescape').stdout); // get the id of the window that us running runescape

if (!id) {
  console.log('OSRS is not running');
  process.exit(1);
}

// positions window at 0,0 (top left) and sizes it to the correct size for classic view
function setupWindow() {
  shell.exec(`xdotool windowmove ${id} 0 0`);
  shell.exec(`xdotool windowsize ${id} 768 505`);
}
function openWindow() {
  shell.exec(`xdotool windowactivate ${id}`);
}
function screenshot() {
  shell.exec(`import -window root -crop 768x542+0-0 ./screenshots/${Date.now()}.jpg -screen`);
}

function minWindow() {
  shell.exec(`xdotool windowminimize ${id}`);
}

setupWindow();
openWindow();
setTimeout(() => {
  screenshot();
  // minWindow();
}, 1000);
