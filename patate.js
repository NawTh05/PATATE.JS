
class Patate {
	constructor() {
		this.r = 50;
		this.x = 50;
		this.ground = (height - this.r) - 45;
		this.y = this.ground;
		this.vx = 0;
		this.vy = 0;
		this.gravity = 0.5;
		this.jumpSpeed = 10;
		this.moveSpeed = 5;
		this.friction = 0.2;
		this.direction = 'right';
		this.patate = image(catIMG, this.x, this.y, this.r, this.r);
	}

	show() {
		if (this.direction == 'right') {
			this.patate = image(catIMG, this.x, this.y, this.r, this.r);
		}
		if (this.direction == 'left') {
			this.patate = image(catBackIMG, this.x, this.y, this.r, this.r);
		}
	}

	move() {
		//speed handling
		this.x += this.vx;
		this.y += this.vy;
		if (this.vx > this.moveSpeed) {
			this.vx = this.moveSpeed;
		}
		if (this.vx < -this.moveSpeed) {
			this.vx = -this.moveSpeed;
		}
		if (this.vy > this.jumpSpeed) {
			this.vy = this.jumpSpeed;
		}
		if (this.vy < -this.jumpSpeed) {
			this.vy = -this.jumpSpeed;
		}

		//friction
		if (this.vx > 0.1) {
			this.vx -= this.friction;
		}
		if (this.vx < -0.1) {
			this.vx += this.friction;
		}


		//gravity
		this.vy += this.gravity;
		if (this.y > (height-(this.r+1))) {
			this.vy = 0;
		}

		//window constraints
		this.y = constrain(this.y, 0, this.ground, height);
		this.x = constrain(this.x, 0, this.x + this.r, width);
		
		//key handling
		if (keyIsDown(38) && this.y > (this.ground - 50)) {
			patate.jump();
		}
		else if (keyIsDown(37)) {
			patate.move_left();
			this.direction = 'left';
		}
		else if (keyIsDown(39)) {
			patate.move_right();
			this.direction = 'right';
		}
	}

	move_left() {
		this.vx += -1;
	}

	move_right() {
		this.vx += 1;
	}

	jump() {
		this.vy -= 5;
	}

}