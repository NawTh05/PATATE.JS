
class Patate {
	constructor() {
		this.r = 70;
		this.x = 50;
		this.ground = (height - this.r) - 50;
		this.y = this.ground;
		this.vx = 0;
		this.vy = 0;
		this.gravity = 0.5;
		this.jumpSpeed = 10;
		this.moveSpeed = 5;
		this.friction = 0.2;
		this.direction = 'right';
		this.patate = image(catIMG, this.x, this.y, this.r, this.r);
		this.laser = false;
	}

	show() {
		if (this.direction == 'right' && this.laser == false) {
			this.patate = image(catIMG, this.x, this.y, this.r, this.r);
		}
		if (this.direction == 'left' && this.laser == false) {
			this.patate = image(catBackIMG, this.x, this.y, this.r, this.r);
		}
		if (this.direction == 'right' && this.laser == true) {
			this.patate = image(catLaserIMG, this.x, this.y, this.r, this.r);
		}
		if (this.direction == 'left' && this.laser == true) {
			this.patate = image(catBackLaserIMG, this.x, this.y, this.r, this.r);
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
		this.x = constrain(this.x, 0, width - this.r);
		
		//key handling
		if (keyIsDown(38) && this.y > (this.ground - 50)) {
			patate.jump();
		}
		if (keyIsDown(37)) {
			patate.move_left();
			this.direction = 'left';
		}
		if (keyIsDown(39)) {
			patate.move_right();
			this.direction = 'right';
		}
		if (keyIsDown(32)) {
			this.laser = true;
		}
		else {
			this.laser = false;
		}
	}

	getLaserState() {
		return this.laser;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	getDir() {
		return this.direction;
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