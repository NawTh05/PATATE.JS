let ppos;
let pangle;
let patate;

class Player {
  constructor(x,y,w,h){
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show(){
    ppos = this.body.position;
    pangle = this.body.angle;
    translate(ppos.x, ppos.y);
    rotate(pangle);
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    console.log(ppos.y);
  }

  move(){
    if (keyIsDown(RIGHT_ARROW)) {
      this.body.position.x += 0.5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.body.position.x -= 0.5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.body.position.y -= 0.5;
    }
  }
}
