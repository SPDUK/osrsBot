Clone the folder into a folder called OsrsBot in the home directory
`git clone git@github.com:SPDUK/osrsBot.git ~/OsrsBot && cd ~/OsrsBot`

`npm install`

If install fails with robotsJS:
`sudo apt install libxtst-dev libpng++-dev` (on linux)

If install fails with imagemagick-native the path is wrong, add something similar to this to your bashrc/zshrc using the correct version:
`export PATH=/usr/lib/x86_64-linux-gnu/ImageMagick-6.9.10/bin-q16:$PATH`

#

To start GUI (linux 86 only right now)
`./GUI/osrsbot-x86_64.run`

#

## Is this "real"?

No, it's just for learning purposes. And if you use it you'll most probably get banned.

## Why?

Because I always wondered how naive/simple bots work, and runescape is the perfect game to try it with, as it's just point and click, and everything is based on the colors/UI state.

## What will it do?

Very basic things like mine iron ore until the inventory is full then drop them and repeat, but hopefully be smarter than a typical mouse recorded autoclicker.