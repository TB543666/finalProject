// Variables
let audio;
let state;
let ampSlider, ampValue;
let playButton, pauseButton,backButton, saveButton, fileButton;
let mediaPlayer, nightCoreConverter;
let stateChecker = false;
let ampSliderState = false;
let scrubber;

// This funtcion sets up the cavas and the state of the program.
function setup() {
  state = 1;
  let c = createCanvas(windowWidth, windowHeight);
  c.drop(dropFile);
}

// This function is associated with the dropping of audio files onto the canvas,once an audio file is dropped onto the canvas the variable 'audio' is then set to the audio file that is dropped onto the canvas.
function dropFile(file){
  if (file.type === "audio") {
    stateChecker = true;
    audio = loadSound(file.data);
  }
}

// This function detects when a key is pressed and then calls a function.
function keyPressed() {
  if (keyCode === ESCAPE) {
    reloadProgram();
  }
}

function mouseClicked() {
  if (audio.isPlaying()) {
    audio.jump(mouseX/scrubber);
  }
}

// This function is the main part of the program as it calls different functions depending on the what the state variable is set to.
function draw(file) {
  if (state === 1) {
    background(60, 161, 195);
    screenText();
    setupButtons();
  }

  if (state === 2) {
    background(60, 161, 195);
    screenText();
    reloadProgramButton();

    // This part of the program is needed as it allows for certain functions to only be called once in the draw function.
    if (stateChecker){
      setupButtons();
      setupSliders();
      stateChecker = false;
      ampSliderState = true;
    }

    // This part of the function is in charge of adjusting the volume of the song.
    if (ampSliderState === true) {
      ampValue = ampSlider.value();
      audio.amp(ampValue);
      scrubber = width/audio.duration();
    }
  }

  if(state === 3) {
    background(60, 161, 195);
    screenText();
    reloadProgramButton();
    saveAudioButton();

    // This part of the program is needed as it allows for certain functions to only be called once in the draw function.
    if (stateChecker){
      audio.rate(1.25);
      setupButtons();
      setupSliders();
      stateChecker = false;
      ampSliderState = true;
    }

    // This part of the function is in charge of adjusting the volume of the song.
    if (ampSliderState === true) {
      ampValue = ampSlider.value();
      audio.amp(ampValue);
      scrubber = width/audio.duration();
    }

  }
}
