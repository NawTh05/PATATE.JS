
function preload() {
	catIMG = loadImage('assets/cat.png');
	catBackIMG = loadImage('assets/cat_back.png');
	backgroundIMG = loadImage('assets/Background.png');
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