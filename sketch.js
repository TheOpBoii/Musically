var hr ;
var mn;
var sc;
var secAngle;
var minAngle;
var hrAngle;





function setup() {
 

  createCanvas(800,400);

  angleMode(DEGREES);
 }

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second ();  
  secAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  push();
   rotate(secAngle);
   stroke(255,0,0);
    strokeWeight(7);
     line(0,0,100,0);
      pop()
      push()
      rotate(minAngle);
   stroke(0,255,0);
    strokeWeight(7);
     line(0,0,75,0);
      pop()
      push()
      rotate(hrAngle);
   stroke(0,0,255);
    strokeWeight(7);
     line(0,0,50,0);
      pop()
      arc(0,0,300,300,0,secAngle);
      arc(0,0,280,280,0,minAngle);
      arc(0,0,260,260,0,hrAngle);
  drawSprites();
}