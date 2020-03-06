var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('Blue')
      text("Guess Who I Seen Today",100,100);
      break;

    case 1:
      background('yellow');
      fill('black')
      text("Everybody I Looked At", 100,100);
      break;


  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0
  }
}
