
function setupButtons() {
  if (state === 1) {
    mediaPlayer = createButton("Media Player");
    mediaPlayer.position(0, 300);
    mediaPlayer.class("btn btn-primary btn-lg btn-block");
    mediaPlayer.mousePressed(mediaPlayerState);

    nightCoreConverter = createButton("Night Core Converter");
    nightCoreConverter.position(0, 375);
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

function saveAudioButton() {
  saveButton = createButton("S A V E");
  saveButton.position(width-73, height-36);
  saveButton.class("btn btn-primary");
  saveButton.mousePressed(saveAudio);
}
