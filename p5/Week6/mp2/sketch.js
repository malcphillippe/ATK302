var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('Blue')
      text("Problem Child", 100, 100);

      timer = timer + 1;
      if (timer > 200) {
        myState = 1;
        timer = 0

      }
      break;

    case 1:
      background('yellow');
      fill('black')
      text("Gods Child Satians Angel", 100, 100);
      break;

    case 2:
      break;

    case 3:
      break;

    case 4:
    background(94,153,255,100);
    fill('black')
    text("Welcome to Hell", 100, 100);

    timer = timer + 1;
    if (timer > 200) {
      myState = 1;
      timer = 0

    }
      break;


  }

}


function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}
