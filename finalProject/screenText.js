// This function is used to set up the text in the different states.
function screenText() {
  if (state === 1) {
    textAlign(CENTER);
    fill(184, 230, 255);
    textSize(120);
    textStyle(BOLD);
    textFont("Agency FB");
    text("P r o t o t y p e   M e d i a   P l a y e r", width/2, 200);
  }

  if (state === 2) {
    textAlign(LEFT);
    fill(184, 230, 255);
    textSize(50);
    textStyle(BOLD);
    textFont("Agency FB");
    text("M u s i c   P l a y e r", 50, 100);
  }

  if (state === 3) {
    textAlign(LEFT);
    fill(184, 230, 255);
    textSize(50);
    textStyle(BOLD);
    textFont("Agency FB");
    text("N i g h t c o r e   C o n v e r t e r", 50, 100);
  }
}
