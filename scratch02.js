function setup() {  
createCanvas (displayWidth, displayHeight);
}

var strox=0;

/*
function touchStarted() {
line(p,0,(p-15)+random(30),height);
strox=strox+1;
// prevent default
return false;
} 
*/
       
function draw() {
  strokeWeight(random(.02*width));
  var p = width*random(1);
    //if (mouseIsPressed) {
    line(p,0,(p-15)+random(30),height);
    strox=strox+1;
    //}
    
    //if (touchX>0) {
    //line(p,0,(p-15)+random(30),height);
    //strox=strox+1;
    //}
  
    if (strox>200) {
    strox=0;
    background(255);
    }
}
