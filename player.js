
var orientation = "R";
var laser = false;
var canJump = true;

class Player {
  constructor(x,y,w,h){
    var options = {
      friction: 0.5
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
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
    noStroke()
    fill(0,0,0,0,100);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    if ((orientation == "R") && (laser == false)) {
      image(cat_front, 0, 7, this.w, this.h);
    }
    if ((orientation == "L") && (laser == false)) {
      image(cat_back, 0, 7, this.w, this.h);
    }
    if ((orientation == "R") && (laser == true)) {
      image(cat_laser, 0, 7, this.w, this.h);
    }
    if ((orientation == "L") && (laser == true)) {
      image(cat_back_laser, 0, 7, this.w, this.h);
    }
    //gravity
    Matter.Body.applyForce(this.body,this.body.position,{x:0.0,y:(this.body.mass * 0.003)});
    pop();
  }


  jump(){
    if (canJump == true){
      Matter.Body.applyForce(this.body,this.body.position,{x:0.0,y:-0.1});
    }
    if (this.body.velocity.y < -11){
      canJump = false;
    }
    if ((this.body.velocity.y < 0.0001) && (this.body.velocity.y > -0.0001)){
      canJump = true;
    }
  }


  move(){
    if (keyIsDown(RIGHT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:0.01,y:0.0});
      orientation = "R";
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.body.friction = 0;
      Matter.Body.applyForce(this.body,this.body.position,{x:-0.01,y:0.0});
      orientation = "L";
    }
    else {
      this.body.friction = 0.1;
    }
    if (keyIsDown(UP_ARROW)) {
      this.jump();
    }
    if (keyIsDown(32)) {
      laser = true;
    }
    else {
      laser = false;
    }
  }


// getting the states of the variables
  get_laser_state(){
    return laser;
  }
  get_orientation(){
    return orientation;
  }
}
