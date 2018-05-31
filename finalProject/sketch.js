let audio;
let ampSlider, frequencySlider;
let ampValue, frequencyValue;
let playButton, pauseButton, startButton, fileButton;
let stateChecker = false;
let state;
let audioLoaded = false;
let volume = false;

function setup() {
  state = 1;
  let c = createCanvas(windowWidth, windowHeight);
  c.drop(dropFile);
}

function dropFile(file){
  if (file.type === "audio") {
    stateChecker = true;
    audio = loadSound(file.data);
  }
}

// function fileExplorer() {
//   selectFile = createFileInput("Choose a Song", gotFile);
//   selectFile.position(0,0);
// }

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function screenText() {
  if (state === 1) {
    textAlign(CENTER);
    fill(184, 230, 255);
    textSize(120);
    textStyle(BOLD);
    textFont("Agency FB");
    text("P r o t o t y p e  M e d i a  P l a y e r", width/2, height/2-150);
  }

  if (state === 2) {
    textAlign(LEFT);
    fill(184, 230, 255);
    textSize(50);
    textStyle(BOLD);
    textFont("Agency FB");
    text("M u s i c  P l a y e r", 50, 100);
  }
}

function setupButtons() {
  if (state === 1) {
    startButton = createButton("S T A R T");
    startButton.position(width/2-75, height/2);
    startButton.class("btn btn-primary btn-lg");
    startButton.mousePressed(mainState);
  }

  if (state === 2) {
    playButton = createButton("P L A Y");
    playButton.position(width/2-100, height/2+50);
    playButton.class("btn btn-primary");
    playButton.mousePressed(playAudio);

    pauseButton = createButton("P A U S E");
    pauseButton.position(width/2+25, height/2+50);
    pauseButton.class("btn btn-primary");
    pauseButton.mousePressed(pauseAudio);

    // fileButton = createButton("P A U S E");
    // fileButton.position(width/2-50, height/2+150);
    // fileButton.class("btn btn-primary");
    // fileButton.mousePressed(pauseAudio);
  }
}

function mainState() {
  removeElements(startButton);
  state = 2;
}

function setupSliders(){
  ampSlider = createSlider(0, 1, 0.3,0);
  ampSlider.position(width/2-500, height/2);
  ampSlider.style("width", "1000px");
}

function draw(file) {
  if (state === 1) {
    background(60, 161, 195);
    screenText();
    setupButtons();
  }

  if (state === 2) {
    background(60, 161, 195);

    screenText();
    // fileExplorer();

    if (stateChecker){
      setupButtons();
      setupSliders();
      stateChecker = false;
      volume = true;
    }

    if (volume === true) {
      ampValue = ampSlider.value();
      audio.amp(ampValue);
    }
  }
}
