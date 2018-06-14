let wave = new SiriWave({
	container: document.getElementById('your-div'),
	width: 640,
	height: 200
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  wave.setNoise(0.5);
  wave.speed(0.4);
  wave.start();
  
}

function draw() {
  background(255);
}

