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
  this.load.image('octopus', 'assets/octopus.png');
  this.load.spritesheet('cat', 'assets/CATSUNICORN.png', {
    frameWidth: 105,
    frameHeight: 143,
  });
  // this.load.image('cat', 'assets/cat.png');
  // { frameWidth: 32, frameHeight: 48 };
}

function create() {
  //this.gameSpeed = 10;

  this.ground = this.add.tileSprite(0, 600, 800, 32, 'ground').setOrigin(0, 1);

  //this.add.image(400, 300, 'ocean');

  // platforms = this.physics.add.staticGroup();

  // platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  //this.add.image();

  player = this.physics.add.sprite(100, 450, 'cat');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'cat', frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('cat', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, platforms);
}

function update() {
  //this.ground.tilePositionX += 10;

  this.ground.autoScroll(-150, 0);

  // if (cursors.left.isDown) {
  //   player.setVelocityX(-160);

  //   player.anims.play('left', true);
  // } else if (cursors.right.isDown) {
  //   player.setVelocityX(160);

  //   player.anims.play('right', true);
  // } else {
  //   player.setVelocityX(0);

  //   player.anims.play('turn');
  // }

  // if (cursors.up.isDown && player.body.touching.down) {
  //   player.setVelocityY(-300);
  // }
}
