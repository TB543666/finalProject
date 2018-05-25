let fileSelect;

function setup() {
  noCanvas();
  fileSelect = createFileInput("multiple", gotFile);
}

function gotFile(file) {
  let div = createDiv(file.name + " " + file.type + " " + file.size + " bytes");
  if (file.isImage()) {
    background(file.data);
  }
  else if (file.isText()) {
    createDiv(file.data);
  }
}
