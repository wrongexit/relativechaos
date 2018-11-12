function setup() {
  createCanvas(720, 720);
  background(127);
  noStroke();
  fill(0);
}

function draw() {
  rect(310, 310, 100, 100);
  if ((mouseIsPressed == true) && (abs(360 - mouseX)<50) && (abs(360 - mouseY)<50)) {
    fill(255);
  }
}
