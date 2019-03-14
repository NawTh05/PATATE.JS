

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
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke()
    fill(0,0,0,0,100);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(cat_front, 0, 7, this.w, this.h);
    //console.log(this.body.position);
  }

  move(){
    if (keyIsDown(RIGHT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:0.01,y:0.0});
      fill(87, 101, 116);
      image(cat_front, 0, 7, this.w, this.h);
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:-0.01,y:0.0})
      fill(87, 101, 116);
      image(cat_back, 0, 7, this.w, this.h);
    }
    else {
      this.body.friction = 0.5;
    }
    if ((keyIsDown(UP_ARROW)) && (this.body.position.y > 300*2/4)) {
      Matter.Body.applyForce(this.body,this.body.position,{x:0.0,y:-0.02})
    }
  }
}
