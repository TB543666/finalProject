let song;
let timer;

function preload() {
  song = loadSound("music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  timer = width/song.duration();
  song.play();

}

function draw() {
  print(song.currentTime());

  fill(0);

  rect(0,0,timer*song.currentTime(),height);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.jump(mouseX/timer);

  }
}
