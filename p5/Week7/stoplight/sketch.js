var myState = 0;
var timer = 0;

function setup() {
  createCanvas(800,800);

  rectMode('center');
  ellipse('center');
}

function draw() {
  fill('black')
  rect(width/2, height/2, 200, 500);



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
  fill(97, 255, 69, 100)
  ellipse(width/2, height/2, 150,150);
  console.log('Green Light');
    break;

  case 1:
  fill(255,234,67,100)
    ellipse(width/2, height/2 - 160, 150, 150);
  console.log('yellow Light');

    break;

    case 2:
    fill(255,34,26,100)
    ellipse(width/2, height/2 + 160, 150, 150);
    console.log('red Light');

      break;

}
}
