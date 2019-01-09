At GE it will probably break after around 30 minutes, not sure why yet but I assume the camera moves every 30 minutes.

At castlewars it will work until a random hunter impling gets in front of your mouse cursor.

Probably will add pest control bank, as it has no random events and has bank booths surrounding it each side.

Expects you to be standing at either castlewars bank or at GE.
Items needed: Runes and items to cast glassmake. Runes in inventory, items in the bank.

Bank setup: Seaweed in 3rd column down, in the last 2 rows you should place seaweed and buckets of sand, sand goes in the last slot.

If you are at castlewars set the camera to north fully zoomed in, you should start the script with just astral runes in your inventory and it will just make for 4-5 hours or so then stop.
(Right now you need to manually change this in the code, change `bank.banks.GE` to `bank.banks.castleWars`)

At GE It should work fine, you should stand on the left side of the 2 bankers, fully zoomed in and hold the down arrow until the bank booth takes up most the screen, if you are facing head on to the banker or to the right a little it will be fine, basically don't go too far to the right or left.

You can always tweak the values such as changing `robot.setMouseDelay(Math.floor(Math.random() * 2000) + 3600);` higher or lower depending on how fast the bank opens with your internet.
