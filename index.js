

const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;


let grassIMG;

function preload(){
  grassIMG = loadImage('assets/grass.png')
  cat_front = loadImage('assets/cat.png')
}


function setup(){
  const canvas = createCanvas(300,300);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(width/2,height-20,width*2,50);
  player = new Player(100,height - 400,100,80);

}

function draw(){
  background(87, 101, 116)
  //Matter.Engine.update(engine);
  ground.show();
  player.show();
  player.move();
}
