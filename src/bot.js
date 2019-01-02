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
  shell.exec(`xdotool windowsize ${id} 768 580`);
}
function openWindow() {
  shell.exec(`xdotool windowactivate ${id}`);
}

function minWindow() {
  shell.exec(`xdotool windowminimize ${id}`);
}

setupWindow();
openWindow();
setTimeout(() => {
  minWindow();
}, 1000);
