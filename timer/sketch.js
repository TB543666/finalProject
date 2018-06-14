
let song;
let timer;
let gif;

function preload() {
  song = loadSound("music.mp3");
  gif = createImg("anime.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  timer = width/song.duration();
  song.play();
  gif.size(width,height);
}

function draw() {
  background(gif);
  print(song.currentTime());


  fill(0);

  rect(0,0,timer*song.currentTime(),height);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.jump(mouseX/timer);

  }
}
// https://github.com/kopiro/siriwavejs
