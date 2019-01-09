### Requirements: xdotool (linux only), nodejs,

## What will it do?

No custom UIs, No custom clients, no OSbuddy/Runelite etc, No reading the memory in any way, just the default RS client.

It has a human-like mouse movement, with jitter, acceleration/decelleration and random movements while drawing a path, as well as randomized clicking and over/undershooting around the end position.
All of these things are random for every single movement, and it will click in a random area around the target position, also it makes human-like mistakes such as not filling a full inventory every time.

Every movment is randomly timed, with random ranges, and each random range can randomly be very high or very low.
The click times are also random, so each click isn't just an instant 1ms click but it toggles the mouse down, and then back up after a random delay.
It will sometimes go AFK at random parts of the script, hopefully human-like, for a random amount of time, but no longer than 3~ minutes.

## How do I run a script?

Spend 2 minutes reading this readme to set things up, each folder inside scripts will have it's own readme that says the specific things needed to do to make the script work, as they're not smart enough to automate everything just yet.

### How to install:

Clone the folder into a folder called OsrsBot in the home directory
`git clone git@github.com:SPDUK/osrsBot.git ~/OsrsBot && cd ~/OsrsBot`

`npm install`

If install fails with robotsJS:
`sudo apt install libxtst-dev libpng++-dev` (on linux)

Things that might not work due to UI wierdness:
When you first start a script, if you have a window tab with the name "Old" in it then it might not work properly.

`window.getWindowPos()` needs to be calibrated to the top left of the runescape window, but depending on tweaks made to the desktop the title bar might be larger/smaller than hard coded, so I might need to figure out how to find the title bar size and count that.

Works with `Yaru` (ubuntu GNOME 18.10) theme by default, but you can change it easily to work with any other setups by changing `return [x - 10, y - 45]` in window.js to whatever the window settings are on your theme.

#

### Runescape rebinds needed:

- Bank:

  - You must have unlocked your bank pin before starting a script
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
  - Restore defaults -> Rebind inventory to f2, Rebind logout(door) to F12, music hotkey will be none.
  - esc closes current interface ON
- Advanced options:
  - Always hide roofs.
  - Data Orbs ON.

Other settings should not be important.

#

To start GUI (linux x86 only right now. You can generate different architectures with [Shoes](http://shoesrb.com/)), However things won't work on non-linux anyway.
`./GUI/osrsbot-x86_64.run`

#

###

Client: A folder for things that are for the main client window and not specifically scripts to interact with the game, such as resizing the window or changing menu settings, to be reused in many different scripts.

Helpers: General helper functions for all files.

Scripts: Specific script files that will import pieces of other files to create a bot script.

## Is this "real"?

No, it's just for learning purposes. And if you use it you'll most probably get banned. I don't even use it myself because I don't play anymore, I just run it to test it. I suggest you also don't use it, but if you want to try it out you should only use it for a little while to not get banned.

## Why?

Because I always wondered how naive/simple bots work, and runescape is the perfect game to try it with, as it's just point and click, and everything is based on the colors/UI state. It also turns out to have quite good anti-bot features, and fun little things to work around and figure out over time.
