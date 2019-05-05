

class Laser {
  constructor(x,y,w,h){

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
