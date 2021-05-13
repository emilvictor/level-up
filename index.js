var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 400,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
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
  this.load.image('background', 'assets/ocean.png');
  this.load.image('ground', 'assets/ground.png');
  this.load.image('cat-idle', 'assets/cat-idle.png');

  this.load.spritesheet('cat', 'assets/cat-run.png', {
    frameWidth: 84,
    frameHeight: 94,
  });

  this.load.image('obsticle', 'assets/octupus.png');
}

function create() {
  this.add.image(0, 0, 'background').setOrigin(0, 0);

  this.gameSpeed = 5;
  const { height, width } = this.game.config;

  // this.startTrigger = this.physics.add
  //   .sprite(0, 10)
  //   .setOrigin(0.1)
  //   .setImmovable();

  this.ground = this.add
    .tileSprite(0, height, width, 28, 'ground')
    .setOrigin(0, 1);

  this.cat = this.physics.add
    .sprite(0, height, 'cat-idle')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(600);

  this.anims.create({
    key: 'cat-run',
    frames: this.anims.generateFrameNumbers('cat', { start: 2, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.spacebar = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  //  The score
  scoreText = this.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    fill: '#000',
  });

  //this.initStartTrigger();
}

function update() {
  this.ground.tilePositionX += this.gameSpeed;

  if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
    this.cat.setVelocityY(-300);
  }

  this.cat.play('cat-run', true);
}
