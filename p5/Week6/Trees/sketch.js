function setup() {
  // put setup code here
  createCanvas(720, 400);
}


function draw() {
  // put drawing code here
  background(126, 192, 238);
noStroke();

fill(204);
triangle(3,400,59,398,31,277);

fill("brown");
rect(81, 81, 63, 63);

fill(204);
quad(189, 18, 216, 18, 216, 360, 144, 360);

fill('yellow');
ellipse(659, 45, 72, 72);

fill(240,171,6);
triangle(663,400,682,202,719,400);

fill(221,109,17);
arc(290,283, 280, 280, PI, TWO_PI);

fill(240,171,6)
rect(2, 481, 715, 481)

fill("green")
ellipse(32,322, 100, 100);

fill ("green")
ellipse(681,241, 200, 200);

fill(0) ;
textSize(40) ;
  text(mouseX + "," + mouseY, 40, 40) ;
}
