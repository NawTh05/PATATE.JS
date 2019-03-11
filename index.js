

const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;


let grassIMG;

function preload(){
  grassIMG = loadImage('assets/grass.png')
}


function setup(){
  const canvas = createCanvas(300,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width*2,100);
  player = new Player(100,height - 100,100,50);

}

function draw(){
  background(87, 101, 116)
  Matter.Engine.update(engine);
  ground.show();
  player.show();
  player.move();
}
