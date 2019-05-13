

class Background {
  constructor(x,y,w,h){
    var options = {
      isStatic: true,
      isSensor: true
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
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
    imageMode(CENTER);
    image(backgroundIMG, 0, 0, this.w, this.h);
    pop();
  }
}

class Obstacles {
  constructor(x,y,w,h){
    var options = {
      isStatic: true
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
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
    //imageMode(CENTER);
    //image(backgroundIMG, 0, 0, this.w, this.h);
    pop();
  }
}
