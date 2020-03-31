var x = 0;


function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {

  background('lightblue');


push();
  translate(x,0);
  makeCovid();
  x = x + 5
  if (x > width) {
    x = -300;
  }
  pop();

}



function makeCovid() {
  noStroke();
fill("red");
  ellipse(100, 100, 100, 100)
  ellipse(140,140,40,40);
  ellipse(140,60,40,40);
  ellipse(50, 130, 40, 40);

}
