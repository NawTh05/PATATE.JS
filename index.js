
function preload() {
	catIMG = loadImage('assets/cat.png');
	catLaserIMG = loadImage('assets/cat_laser.png');
	catBackIMG = loadImage('assets/cat_back.png');
	catBackLaserIMG = loadImage('assets/cat_back_laser.png');
	backgroundIMG = loadImage('assets/BackgroundCrop.png');
}


function setup() {
	createCanvas(800, 600);
	patate = new Patate();
}


function draw() {
	background(backgroundIMG);
	patate.show();
	patate.move();
}