
let audio;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.drop(dropFile);

}

function draw() {
  background(0);

}

function dropFile(file){
  if (file.type === "audio") {
    audio = loadSound(file.data, playAudio);
  }
}

function playAudio() {
  audio.play();
}
