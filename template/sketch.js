let audio;
let ampSlider, frequencySlider;
let ampValue, FrequencyValue;
let playButton, pauseButton;


function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.drop(dropFile);

  setupButtons();
}

function draw() {
  background(255);
  setupSliders();
  setupButtons();
}

function dropFile(file){
  if (file.type === "audio") {
    audio = loadSound(file.data);
  }
}

function setupButtons() {
  playButton = createButton("P L A Y");
  playButton.position(100, 100);
  playButton.mousePressed(playAudio);

  pauseButton = createButton("P A U S E");
  pauseButton.position(200, 100);
  pauseButton.mousePressed(pauseAudio);
}


function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function setupSliders(){
  ampSlider = createSlider(0, 1, 0.3, 15);
  ampSlider.position(width - 340, 50);
  ampSlider("width", "100px");

  frequencySlider = createSlider();
  frequencySlider.position(width - 340, 100);
  frequencySlider("width", "100px");
}
