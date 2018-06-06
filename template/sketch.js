/**
 * DEMO: Draw the waveform of a sound as it plays using p5.FFT.waveform()
 */

let soundFile;
let fft;
let fftBands = 512;

// Array of amplitude values (0-255) over time.
let waveform = [];

function preload() {
  soundFormats("mp3", "ogg");
  soundFile = loadSound("music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  soundFile.loop();

  /**
   *  Create an FFT object.
   *  Accepts optional parameters for
   *    - Smoothing
   *    - Length of the FFT's analyze/waveform array. Must be a power of two between 16 and 1024 (default).
   */
  fft = new p5.FFT(0.1, 2048);
}

function draw() {
  background(250);

  /**
   * Analyze the sound as a waveform (amplitude over time)
   */
  waveform = fft.waveform();

  // Draw snapshot of the waveform
  beginShape(QUAD_STRIP);
  for (let i = 0; i< waveform.length; i++){
    stroke(0);
    strokeWeight(5);
    vertex(i, map(waveform[i], -1, 1, height, 0) );
  }
  endShape();
}
