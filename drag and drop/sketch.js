let audio;
let ampSlider, frequencySlider;
let ampValue, frequencyValue;
let playButton, pauseButton, nextButton;
let playerButtonState = true;
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

function playerButtons() {
  playButton = createButton("P L A Y");
  playButton.attribute("type", "button");
  playButton.parent("buttons");
  playButton.class("btn btn-success mb-4 d-block");
  playButton.position(100, 100);
  playButton.mousePressed(playAudio);

  pauseButton = createButton("P A U S E");
  pauseButton.position(200, 100);
  pauseButton.mousePressed(pauseAudio);
}

function startButton() {
  nextButton = createButton("S T A R T");
  nextButton.position(width/2, height/2);
  nextButton.mousePressed(mainState);
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
  ampSlider.attribute("type","button");
  ampSlider.class("btn btn-success mb-4 d-block");
  ampSlider.position(width/2, height/2);
  ampSlider.style("width", "200px");

  // // let frequency = audio.Oscillator();
  // frequencySlider = createSlider(0, 10000, frequency, 0);
  // frequencySlider.position(width/2, height/2+100);
  // frequencySlider.style("width", "200px");
}

function draw(file) {
  if (state === 1) {
    background(255);



  }

  else if (state === 2) {

    if (playerButtonState){
      playerButtons();
      setupSliders();
      playerButtonState = false;
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
