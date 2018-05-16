
let song;

function setup() {
  song = createCanvas(windowWidth, windowHeight);
  song.drop(dropFile);

}

function draw() {
  background(0);

}

function keyTyped() {
  if (keyCode === "32"){
    song.play();
  }
}

function dropFile(file){
  song = loadSound(file.data).hide();
  if (file.type === "audio") {
    song = file.data;
  }
}
