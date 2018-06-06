let audio;
let ampSlider;
let ampValue;
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

function keyPressed() {
  if (keyCode === ESCAPE) {
    reloadProgram();
  }
}

// function fileExplorer() {
//   selectFile = createFileInput("Choose a Song", gotFile);
//   selectFile.position(0,0);
// }

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
    screenText();
    reloadProgramButton();

    if (stateChecker){
      audio.rate(1.25);
      setupButtons();
      setupSliders();
      stateChecker = false;
      volume = true;
    }
  }
}
