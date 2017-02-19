function setup() {
  createCanvas(800, 800);
  background('#ceB5a7');
  angleMode(DEGREES);
  
  frameRate(12);
}

function draw() {
  translate(width/2,height/2);
 
  noFill();
  stroke(lerpColor(color('#e06d06'), color('#61e294'), (frameCount%180)/180));
  line(width/4,0,width/4*cos(-frameCount*2),height/4*sin(-frameCount*2));

}

