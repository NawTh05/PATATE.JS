
class Patate {
	constructor() {
		this.r = 50;
		this.x = 50;
		this.y = height - this.r;
		this.vx = 0;
		this.vy = 0;
		this.gravity = 0.05;
	}

	show() {
		rect(this.x, this.y, this.r, this.r);
	}

	move() {
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += this.gravity;
		this.y = constrain(this.y, 0, height - this.r, height);
		this.x = constrain(this.x, 0, this.x + this.r, width);
	}

	move_left() {
		this.vx += 5;
	}

	move_right() {
		this.vx -= 5;
		console.log("droite")
	}

	jump() {
		this.vy -= 5;
	}

}