let SW;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let swDiv = createDiv();
  swDiv.id = "siric";

  SW = new SiriWave({
    width: 1580,
    height:400,
    speed: 0.035,
    amplitude: 0.6,
    container: swDiv,
    autostart: true,
  });
}

function draw() {
  background(0);
  //
  // let siriWave = new siriWave() {
  //   container: document.getElementById('siri-container'),
  //   width: 64
  //   height: 200,
  // }

}
