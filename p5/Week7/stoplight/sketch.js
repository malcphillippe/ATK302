var myState = 0;
var timer = 0;

function setup() {
  createCanvas(800,800);

  rectMode('center');
  ellipse('center');
}

function draw() {
  rect(width/2, height/2, 200, 500);
  ellipse(width/2, height/2, 150,150);
  ellipse(width/2, height/2 - 160, 150, 150);
  fill('red');
  ellipse(width/2, height/2 + 160, 150, 150);
//increase timer

timer = 1+timer;

if (timer == 60) {

  myState = myState + 1;
  timer = 0;
}

if (myState >= 3 ) {

  myState = 0;

}

//switch traffic light

switch (myState) {
  case 0:
  console.log('Green Light');
    break;

  case 1:
  console.log('yellow Light');

    break;

    case 2:
    console.log('red Light');

      break;

}
}
