var zombieland;
function setup() {
  // put setup code here
  createCanvas(800,800);
  zombieland = loadFont("assets/zoombieland.ttf");
}

function draw() {
  // put drawing code here
  textFont(zombieland,120);
  text("ProblemChild!!",100,100);
}
