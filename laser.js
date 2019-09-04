
class Laser {
	constructor(x, y, dir) {
		this.rx = 35;
		this.ry = 6;
		this.dir = dir;
		if (this.dir == 'right') {
			this.x = x - 25;
			this.y = y + 45;
		} 
		if (this.dir == 'left') {
			this.x = x + 60;
			this.y = y + 45;
		}
		this.vx = 10;
	}

	move() {
		if (this.dir == 'left'){
			this.x += this.vx;
		}
		if (this.dir == 'right'){
			this.x -= this.vx;
		}
	}

	show() {
		rect(this.x, this.y, this.rx, this.ry);
		fill(255,0,0);
	}
}