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

function saveAudio() {
  saveSound(audio, "Nightcore");
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
