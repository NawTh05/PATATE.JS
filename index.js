

const { Engine, World, Events, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
lasers = [];

function preload(){
  grassIMG = loadImage('assets/grass.png');
  cat_front = loadImage('assets/cat.png');
  cat_back = loadImage('assets/cat_back.png');
  laserIMG = loadImage('assets/laser.png');
  cat_laser = loadImage('assets/cat_laser.png');
  cat_back_laser = loadImage('assets/cat_back_laser.png');
  backgroundIMG = loadImage('assets/background_long.png');
}

function setup(){
  const canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  gravity = world.gravity;
  //remove global gravity
  gravity.scale = 0;
  Engine.run(engine);
  ground = new Ground(width/2,height-20,width,50);
  player = new Player(100,height-100,100,100);
  red_laser = new Laser(200,height-100,30,5,0.005);
  world_bod = new World_bod(0,height/2.2,7000,800);
}

function draw(){
  background(87, 101, 116)
  //Matter.Engine.update(engine);
  world_bod.show();
  ground.show();
  player.show();
  player.move();
  red_laser.show();
  laser_shoot(player.get_laser_state(), player.get_orientation());
}

function laser_shoot(laser_state, orientation){
  if (laser_state == true) {
    if (orientation == "L"){

    }
    if (orientation == "R"){

    }
  }
}
