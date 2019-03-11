

class Player {
  constructor(x,y,w,h){
    var options = {
      friction: 0
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h,options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
    console.log(pos.y);
  }

  move(){
    if (keyIsDown(RIGHT_ARROW)) {
      this.body.position.x += 0.3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.body.position.x -= 0.3;
    }
    if (keyIsDown(UP_ARROW)) {
      this.body.position.y -= 0.5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.body.position.y += 0.5;
    }
  }
}
