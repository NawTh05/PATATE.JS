

class Player {
  constructor(x,y,w,h){
    var options = {
      friction: 0.5
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h,options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show(){
    this.body.angle = 0;
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
    console.log(this.body.position);
  }

  move(){
    if (keyIsDown(RIGHT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:0.01,y:0.0})
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:-0.01,y:0.0})
    }
    else {
      this.body.friction = 0.5;
    }
    if ((keyIsDown(UP_ARROW)) && (this.body.position.y > 800*3/4)) {
      Matter.Body.applyForce(this.body,this.body.position,{x:0.0,y:-0.01})
    }
  }
}
