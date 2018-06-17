function setup() {
  createCanvas(windowWidth, windowHeight);
  SW.start();
}

function draw() {
  background(250);

}

let SW = new SiriWave({
  width: 1910,
  height: 300,
  speed: 0.03,
  amplitude: 1,
  container: document.getElementById("siric"),
  autostart: true,
});
