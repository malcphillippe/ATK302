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
      text("Problem Child");
      break;

    case 1:
      background('yellow');
      fill('black')
      text("Gods Child Satians Angel");
      break;


    }


function mouseReleased() {
  myState = myState +1;
  if (myState > 1) {
    myState = 0
  }



function mouseReleased() {
  myState = myState + 1;
  if (myState > 1 ) {
    myState = 0;
  }
}
