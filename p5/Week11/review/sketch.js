var x = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('black');

  rect(10,10,10,10);
  ellipse(x-5,18,10,10);
  ellipse(x+5, 18, 10, 10);

  x = x + 3;

  if (x> width) {
    x = 0;
  }
}
