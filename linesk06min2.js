// linesk06min

var shiftmax = 8; // max px shift dist
var extendmax = 20; // max px line extension

var flip = -1;
var blackflip = 1;
var della = 2000 ; // delay to start

function setup() {  
  
createCanvas (400,400) ; // image createCanvas, square format
  
// noLoop(); 

background(255);
// delay(1000); // delay for video
}

function draw() {
  
 fill(255); 
 strokeWeight(0);
 rect(0,0,width,height); // fill overlay

  for (var g = 1; g < 2+random(9); g = g+1) {
  fill(255,88);
  strokeWeight(0);
  rect(0,0,width,height); // scrim overlay

  var density = random(1)*.8;
  var minx = width * random(1);
  var maxx = width * random(1);
  var miny = height * random(1);
  var maxy = height * random(1);  
    if (maxy<miny) {
      var t = miny;
      miny=maxy;
      maxy=t;
    }

    if (maxx<minx) {
      var t = minx;
      minx=maxx;
      maxx=t;
    }
    
    if (random(10)<3.8) {
    miny=0;
    maxy=height;
    }

  if (random(1)<0.4) {blackflip = -1 * blackflip;}
  stroke((blackflip+1)*111,0,0,128+random(1)*128);
    
  var extend = (extendmax*random(1)); 
 
    // vert lines
    if (random(1)<0.5) {
    var chunk=(maxx-minx) * random(1);
    strokeWeight(1);
    line(minx+chunk,miny-extend * random(1),minx+chunk,maxy+extend * random(1));
      if (flip==1) {
      line(width-(minx+chunk),miny-extend*random(1),width-(minx+chunk),maxy+extend * random(1)); // mirr
      }
}

  var wtmod = random(1);
  for (var f = miny; f < maxy; f = f+(1/density)) {
    var strokwate = 2+random(26)*wtmod ;
      strokeWeight(strokwate);
    var shift = shiftmax * random(1);
    var mvarx = minx-extend*random(1);
    var maxtx = maxx+extend*random(1);
    f=f-shiftmax/2+shift;
 var devia = 0; ////
 if (random(1)<0.1) {devia = -1.5+random(3);} ////
    line(mvarx,f,maxtx,f  +devia   ); // this is where it happens
      if (random(1)<0.17) { 
      strokeWeight(strokwate+1);
      line(mvarx,f,mvarx+extend*random(2),f); // heavy up line start
      // mirr here
        if (flip==1) {
  //      line(width-mvarx,f,width-mvarx+extend*random(2),f  +devia   ); // mirr
        line(width-mvarx,f,width-(mvarx+extend*random(2)),f); // mirr
        }
      } 
      
      if (random(1)<0.17) { 
      strokeWeight(strokwate+1);
      line(maxtx-extend*random(2),f,maxtx,f); // heavy up line end
      // mirr here
        if (flip==1) {
   //     line(width-maxtx-extend*random(2),f,width-maxtx,f); // mirr
        line(width-(maxtx-extend*random(2)),f,width-maxtx,f); // mirr
        }
      } 
      
    if (random(1)<0.0005) {flip = -1 * flip;}
      if (flip==1) {
      line(width-mvarx,f,width-maxtx,f  +devia   ); // mirr
      }
  
    if (random(10)<1) {
    strokeWeight(1);
    line(minx,miny-extend * random(1)/2,minx,maxy+extend * random(1)/2);
    line(maxx,miny-extend * random(1)/2,maxx,maxy+extend * random(1)/2);
    
      if (flip==1) {
      line(width-minx,miny-extend * random(1)/2,width-minx,maxy+extend * random(1)/2); // mirr
      line(width-maxx,miny-extend * random(1)/2,width-maxx,maxy+extend * random(1)/2); // mirr
      }
    }
  }
  if (random(1)<0.0005) {flip = -1 * flip;}

}

  // very occasionally, some traces of circles
  if (random(1)<0.1) { 
  fill(0,0);
  var rx = random(1) * width;
    if (random(1)<0.5){rx=width/2;}
  var ry = random(1) * height;
  var ransom = random(2);

  stroke(255,0 + 64*random(1));
  strokeWeight(4 * random(1));
  ellipse (rx,ry,ransom * (width+height)/2,ransom * (width+height)/2); // circle
  
    for (var t = 1; t < 3; t = t+1) {
    stroke(255,0 + 64*random(1));
    strokeWeight(4 * random(1));
    var skosh = random(1) * ransom;
    ellipse (rx,ry,skosh*(width+height)/2,skosh*(width+height)/2); // smaller circle
    }

  }
  
  // occasionally, some vertical scratches
  if (random(1)<2) { 
    
    for (var t = 1; t < 4; t = t+1) {
    stroke(255, 200+ 0 + 64*random(1));
    strokeWeight(4 * random(1));
    var rx = random(1) * width;
    line(rx,0,rx,height);
    }
  }
  if (random(1)<2) { 
    for (var t = 1; t < 599; t = t+1) {
    stroke(191,0 + 6*random(1));
    strokeWeight(4 * random(1));
    var ry = random(1) * height;
    line(0,ry,width,ry);
    }

  }
  
   if (mouseIsPressed == true) { delay(20000); } 
   
   delay(della); // varerval between pavarings   
   if (della > 99){della = della-12;}

}