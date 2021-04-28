var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('ocean', 'assets/ocean.png');
  this.load.image('ground', 'assets/platform.png');

  this.load.image('cat', 'assets/cat.png');
  // { frameWidth: 32, frameHeight: 48 };
}

function create() {
  this.add.image(400, 300, 'ocean');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  this.add.image();
}

function update() {}
