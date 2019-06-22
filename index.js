

function setup() {
	createCanvas(800, 600);
	patate = new Patate();
}

function keyPressed() {
	if (key == ' ') {
		patate.jump();
	}
	else if (keyCode == 'LEFT_ARROW') {
		patate.move_left();
		console.log('salut');
	}
	else if (keyCode == 'RIGHT_ARROW') {
		patate.move_right();
	}
}



function draw() {
	background(200);
	patate.show();
	patate.move();
}