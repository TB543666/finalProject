let audio;
let ampSlider, frequencySlider;
let ampValue, frequencyValue;
let playButton, pauseButton, nextButton;
let stateChecker = true;
let state;
let audioLoaded = false;


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
  removeElements(nextButton);
  state = 2;
}

function setupSliders(){
  ampSlider = createSlider(0, 1, 0.3,0);
  ampSlider.position(width/2, height/2);
  ampSlider.style("width", "200px");

  // let frequency = audio.Oscillator();
  frequencySlider = createSlider(0, 10000, frequency, 0);
  frequencySlider.position(width/2, height/2+100);
  frequencySlider.style("width", "200px");
}

function draw(file) {
  if (state === 1) {
    background(0);

    nextButton = createButton("P L A Y");
    nextButton.position(width/2, height/2);
    nextButton.mousePressed(mainState);

  }

  else if (state === 2) {

    if (stateChecker){
      setupButtons();
      setupSliders();
      stateChecker = false;
      state = 3;
    }

    else{
      state = 1;
    }
  }

  else if (state === 3) {
    ampValue = ampSlider.value();
    audio.amp(ampValue);
    // print(ampValue);

    frequencyValue = frequencySlider.value();
    audio.freq(frequencyValue);
    print(frequencyValue);
  }
}
