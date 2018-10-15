function setup() {
  createCanvas (displayWidth, displayHeight-1);
  background(0);
  noStroke();
  rectMode(RADIUS);
}
var n = 0;
function draw() {
  n = n + .01;
  fill( int(noise(n)*256), int(noise(n+100)*256), int(noise(n+200)*256), int(noise(n+300)*10) );
  rect(noise(n+400) * width, noise(n+500) * height, noise(n+600) * width * 1.5, noise(n+700) * height * 1.5);
}
