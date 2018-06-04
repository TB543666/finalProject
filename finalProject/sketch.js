
let audio;
let ampSlider, frequencySlider;
let ampValue, frequencyValue;
let playButton, pauseButton,backButton, fileButton;
let mediaPlayer, nightCoreConverter;
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
    text("P r o t o t y p e   M e d i a   P l a y e r", width/2, 150);
  }

  if (state === 2) {
    textAlign(LEFT);
    fill(184, 230, 255);
    textSize(50);
    textStyle(BOLD);
    textFont("Agency FB");
    text("M u s i c   P l a y e r", 50, 100);
  }

  if (state === 3) {
    textAlign(LEFT);
    fill(184, 230, 255);
    textSize(50);
    textStyle(BOLD);
    textFont("Agency FB");
    text("N i g h t   C o r e   C o n c e r t e r", 50, 100);
  }
}

function setupButtons() {
  if (state === 1) {
    mediaPlayer = createButton("Media Player");
    mediaPlayer.position(0, 300);
    mediaPlayer.class("btn btn-primary btn-lg btn-block");
    mediaPlayer.mousePressed(mediaPlayerState);


    nightCoreConverter = createButton("Night Core Converter");
    nightCoreConverter.position(0, 350);
    nightCoreConverter.class("btn btn-primary btn-lg btn-block");
    nightCoreConverter.mousePressed(nightCoreConverterState);

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

  if (state === 3) {
    playButton = createButton("P L A Y");
    playButton.position(width/2-100, height/2+50);
    playButton.class("btn btn-primary");
    playButton.mousePressed(playAudio);

    pauseButton = createButton("P A U S E");
    pauseButton.position(width/2+25, height/2+50);
    pauseButton.class("btn btn-primary");
    pauseButton.mousePressed(pauseAudio);

  }
}

function reloadProgramButton() {
  backButton = createButton("Back");
  backButton.position(0-10, height-42);
  backButton.class("btn btn-pimary btn-lg");
  backButton.mousePressed(reloadProgram);
}


function mediaPlayerState() {
  clearElements();
  state = 2;
}

function nightCoreConverterState() {
  clearElements();
  state = 3;
}

function clearElements() {
  removeElements(mediaPlayer);
  removeElements(nightCoreConverter);
}

function reloadProgram() {
  window.location.reload(true);
}

function setupSliders(){
  ampSlider = createSlider(0, 1, 0.3,0);
  ampSlider.position(width/2-500, height-200);
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
    reloadProgramButton();

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

  if(state === 3) {
    background(60, 161, 195);
    clearElements();
    screenText();
    reloadProgramButton();

    if (stateChecker){
      audio.freq();
      audio.speed
      setupButtons();
      setupSliders();
      stateChecker = false;
      volume = true;
    }

  }
}
