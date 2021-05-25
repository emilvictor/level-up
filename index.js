import Phaser from 'phaser';
var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 400,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

new Phaser.Game(config);

function preload() {
  this.load.image('background', '/ocean.png');
  this.load.image('ground', '/ground.png');
  this.load.image('cat-idle', '/cat-idle2.png');
  this.load.image('obsticle', '/octopus.png');
  this.load.image('obsticle2', '/coral.png');
  this.load.image('obsticle3', '/shark.png');

  this.load.spritesheet('cat', '/cat-run2.png', {
    frameWidth: 74,
    frameHeight: 83,
  });
}

var text;
var score = 0;
var timedEvent;

function create() {
  this.add.image(0, 0, 'background').setOrigin(0, 0);

  //groundspeed
  this.gameSpeed = 5;
  const { height, width } = this.game.config;
  //ground
  this.ground = this.add
    .tileSprite(0, height, width, 28, 'ground')
    .setOrigin(0, 1);

  //obsticles
  this.obsticle = this.physics.add.sprite(width + 300, height / 2, 'obsticle');
  this.obsticle2 = this.physics.add.sprite(width, height - 40, 'obsticle2');
  this.obsticle3 = this.physics.add.sprite(
    width + 7000,
    height / 2,
    'obsticle3'
  );

  //cat
  this.cat = this.physics.add
    .sprite(0, height, 'cat-idle')
    .setOrigin(-0.4, 1)
    .setCollideWorldBounds(true)
    .setGravityY(600);
  //cat run
  this.anims.create({
    key: 'cat-run',
    frames: this.anims.generateFrameNumbers('cat', { start: 2, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  //spacebar jump
  this.spacebar = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  // scoretext
  text = this.add.text(16, 16, '0', { fontSize: '22px', fill: '#000' });
  //score counting
  timedEvent = this.time.addEvent({
    delay: 200,
    callback: () => {
      score++;
    },
    callbackScope: this,
    loop: true,
  });

  // obsticles colliders
  this.physics.add.collider(this.cat, this.obsticle, gameOver, null, this);
  this.physics.add.collider(this.cat, this.obsticle2, gameOver, null, this);
  this.physics.add.collider(this.cat, this.obsticle3, gameOver, null, this);
}

//gameover
function gameOver() {
  console.log('GAME OVER!');
  this.scene.pause();
  this.add.text(310, 170, 'GAME OVER', {
    fontSize: 'bold 66px',
    fill: '#FF0000',
    stroke: '#000',
    strokeThickness: 4,
  });
}

// ============== OBSTICLES ============== //
//Move obsticle towards cat and update on random y-location
//obsticle octopus
function moveObsticle(obsticle, speed) {
  obsticle.x -= speed;
  if (obsticle.x < 0) {
    obsticle.x = 1000;
    var randomY = Phaser.Math.Between(350, 0);
    obsticle.y = randomY;
  }
}
//obsticle plant
function moveObsticle2(obsticle2, speed) {
  obsticle2.x -= speed;
  if (obsticle2.x < 0) {
    obsticle2.x = 1100;
  }
}
//Move obsticle towards cat and update on random y-location
//obsticle shark
function moveObsticle3(obsticle3, speed) {
  obsticle3.x -= speed;
  if (obsticle3.x < 0) {
    obsticle3.x = 1000;
    var randomY = Phaser.Math.Between(300, 0);
    obsticle3.y = randomY;
  }
}

function update() {
  //groundspeed
  this.ground.tilePositionX += this.gameSpeed;

  //obsticlespeed
  moveObsticle(this.obsticle, 6);
  moveObsticle2(this.obsticle2, 5);
  moveObsticle3(this.obsticle3, 7);

  //gravity jump
  if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
    this.cat.setVelocityY(-300);
  }

  //cat run
  this.cat.play('cat-run', true);

  //scoretext
  text.setText('Score: ' + score);
}
