let audio;
let ampSlider, frequencySlider;
let ampValue, FrequencyValue;
let playButton, pauseButton, nextButton;
let stateChecker = true;
let state;



function setup() {
  state = 1;
  let c = createCanvas(windowWidth, windowHeight);
  c.drop(dropFile);

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

function mainState() {
  nextButton.remove();
  state = 2;
}

function setupSliders(){
  ampSlider = createSlider(0, 100, 50);
  ampSlider.position(width/2, height/2);


  // frequencySlider = createSlider(100);
  // frequencySlider.position(width - 100, 100);
}

function draw() {
  if (state === 1) {
    background(0);

    nextButton = createButton("P L A Y");
    nextButton.position(width/2, height/2);
    nextButton.mousePressed(mainState);

  }

  if (state === 2) {
    background(0);

    if (stateChecker) {
      setupButtons();
      setupSliders();
      stateChecker = false;
    }

    ampValue = 0.01*ampSlider.value();
    print(ampSlider.value());
    audio.amp(ampValue);

  }
}
