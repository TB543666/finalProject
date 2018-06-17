let fileSelect;
let song;

function setup() {
  createCanvas(windowWidth,windowHeight);
  fileSelect = createFileInput("multiple", gotFile);
  fileSelect.position(width/2, height/2);
}

function gotFile(file) {
  let div = createDiv(file.name + " " + file.type + " " + file.size + " bytes");
  if (file.type === "audio") {
    print("true");
  }
}
