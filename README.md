<img src="https://media.giphy.com/media/qhLwaybQQWVe8/giphy.gif" width="100%">

# Project Title

This is a game inspired by the Offline Dinosaur Chrome with our own touch to it. In this game our unicorn cat has sunk down to the bottom of the ocean, help him swim his way out while tryng to avoid the obsticles in the water. Press <i>spacebar</i> to swim up to avoid the obsticles.<br> <br>
This was created using <b>Phaser 3 game engine</b>. See the project hosted live on <a href="https://ocean-run.netlify.app/" target="_blank">THIS LINK</a>
<br><br>
Have fun playing.

# Installation

1. Clone the repository to your computer through your terminal.
2. Go to the cloned repo (cd _name of repo_).
3. Type _npm install_ followed by _npm run dev_.
4. A localhost server should have started for you and you can access the game from there. Have fun.

# Changelog

- [#1 - Installed phaser and starting our learning process.](https://github.com/emilvictor/level-up/pull/1)
- [#2 - We continued learning phaser by following Phasers own game tutorial for beginners.](https://github.com/emilvictor/level-up/pull/2)
- [#3 - We started coding our game and tried to make the ground on the canvas to run.](https://github.com/emilvictor/level-up/pull/3)
- [#4 - We have implemented the ground that scrolls and a ocean-background with the cat that can jump with spacebar.](https://github.com/emilvictor/level-up/pull/4)
- [#5 - Added a score text and tried to give the game a obsticle but hasn't worked yet.](https://github.com/emilvictor/level-up/pull/5)
- [#6 - Our obsticle is now added and working, and added more obsticles and a gamer-over.](https://github.com/emilvictor/level-up/pull/6)
- [#7 - Continued working on score. Implemented a score text that counts up endlessly.](https://github.com/emilvictor/level-up/pull/7)
- [#8 - Made the size of the cat a bit smaller and adjusted minor stuff.](https://github.com/emilvictor/level-up/pull/8)

# Code Review by Simon Lindstedt and Hugo Sundberg

- New game reloads entire site
- Favicon is missing
- `index.js:99` Left over console.log.
- `index.js:52-58` Obsticles can be made into a seperate class.
- `index.js:112-136` The moveObsticles functions could be reduced to a single function (or method on the obsticles-class). This function or method could be written in a way that allows various parameters for manipulating the obsticle-instances.
- No support for mobile
- `index.js:92-94`Collition with physics.add.collider can be added by looping through an array of obsticle instances.
- Hitbox could be smaller
- ``index.html:25```Better to put event listers in JS instead of inline on the html element.
- `./public`Remove unused assets.
- `index.js:2`Use of const or let is recommended over var.
- `index.html:22`Remove commented out line.

# Testers

Tested by the following people:

1. Hugo Sundberg
2. Simon Lindstedt
3. Jane Doe

Tested by the following muggles (non-coders):

1. Daniel (brother)
2. Parsa (a friend)
3. Therese (a friend)
4. John Doe

# Created by

[Gilda A](https://github.com/gillybeans)

[Emil P](https://github.com/emilvictor)
