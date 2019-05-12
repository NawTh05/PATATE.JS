
class Laser {
  constructor(x,y,w,h,v){
    var options = {
      isSensor: true,
      friction: 0
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    Matter.Body.applyForce(this.body,this.body.position,{x:v,y:0.0});
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
    imageMode(CENTER);
    image(laserIMG, 0, 0, this.w, this.h);
    pop();
  }
}
