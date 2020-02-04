var ninja;
var hellcat;
var astronaut;

function setup() {
  // put setup code here
  createCanvas(800,800);
  ninja = loadImage("assets/ninja.jpeg");
  hellcat = loadImage("assets/hellcat.jpeg");
  astronaut = loadImage("assets/astronaut.jpeg");
}


function draw() {
  // put drawing code here
  image(hellcat,width/2,0,200,200);
  image(ninja, width/2,200,200,200);
  image(astronaut,width/2,400,200,200);
}
