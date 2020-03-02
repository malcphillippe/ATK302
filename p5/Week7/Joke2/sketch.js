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
      text("Hey I Invented A New Word", 100, 100);

timer ++ ;

      timer = timer + 1;
      if (timer > 200) {
        myState = 1;
        timer = 0

      }
      break;

    case 1:
      background('yellow');
      fill('black')
      text("Plagiarism", 100, 100);
      break;

timer ++;

    timer = timer + 1;
    if (timer > 200) {
      myState = 0;
      timer = 0

    }
      break;


  }

}


function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
