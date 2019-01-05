### Requirements: xdotool, nodejs, imagemagick

### How to install:

Clone the folder into a folder called OsrsBot in the home directory
`git clone git@github.com:SPDUK/osrsBot.git ~/OsrsBot && cd ~/OsrsBot`

`npm install`

If install fails with robotsJS:
`sudo apt install libxtst-dev libpng++-dev` (on linux)

If install fails with imagemagick-native the path is wrong, add something similar to this to your bashrc/zshrc using the correct version:
`export PATH=/usr/lib/x86_64-linux-gnu/ImageMagick-6.9.10/bin-q16:$PATH`

Things that might not work due to UI wierdness:
When you first start a script, if you have a window tab with the name "Old" in it then it might not work properly.

`window.getWindowPos()` needs to be calibrated to the top left of the runescape window, but depending on tweaks made to the desktop the title bar might be larger/smaller than hard coded, so I might need to figure out how to find the title bar size and count that.

Works with `Yaru` (ubuntu GNOME) theme by default, but you can change it easily to work with any other setups by changing `return [x - 10, y - 45]` in window.js to whatever the window settings are on your theme.

#

### Runescape rebinds needed:

- Bank:

  - You must have unlocked your bank pin before starting a script
  - Use withdraw-x and enter a number over the inventory limit, such as 999999.
  - Rearrange Mode: Swap
  - Withdraw as: item
  - quantity: all

- Screen:
  - Use fixed size.
  - Allow mouse zooming (different scripts will use different screen zooms).
  - Brightness to max.
- Controls / Joystick Icon(?)
  - Mouse buttons 2.
  - Shift click to drop items ON.
- Rebind keys
  - Restore defaults -> Rebind logout(door) to F12, music hotkey will be none.
  - esc closes current interface ON
- Advanced options:
  - Always hide roofs.
  - Data Orbs ON.

Other settings should not be important.

#

To start GUI (linux x86 only right now. You can generate different architectures with [Shoes](http://shoesrb.com/)) However things probably own't work on non-linux.
`./GUI/osrsbot-x86_64.run`

#

###

Client: A folder for things that are for the main client window and not specifically scripts to interact with the game, such as resizing the window or changing menu settings, to be reused in many different scripts.

Helpers: General helper functions for all files.

Scripts: Specific script files that will import pieces of other files to create a bot script

## Is this "real"?

No, it's just for learning purposes. And if you use it you'll most probably get banned.

## Why?

Because I always wondered how naive/simple bots work, and runescape is the perfect game to try it with, as it's just point and click, and everything is based on the colors/UI state.

## What will it do?

Very basic things like mine iron ore until the inventory is full then drop them and repeat, but hopefully be smarter than a typical mouse recorded autoclicker.
