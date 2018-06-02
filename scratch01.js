function setup() {  
createCanvas (400,600);

}

var strox=0;

function draw() {
 // fill(255);
  strokeWeight(random(8));
  var p = width*random(1);
    if (mousePressed) {
    line(p,0,(p-10)+random(20),height); 
    strox=strox+1;
    }
 
    if (strox>200) {
    strox=0;
    background(255);
    }
}
