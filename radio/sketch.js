let radio;

function preload() {
  radio = loadSound("http://www.radioguide.fm/play/571/18598");
}

function setup() {
  radio.play();
}
