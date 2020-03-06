var song1;
var song2;
var song3;
var song4;
var song5;
var myState = 0;
var yb;
var yb1
var yb2
var x = 0;
var ffm
var jug
var dp
function preload() {
  song1 = loadSound('assets/fbt.mp3');
  song2 = loadSound('assets/ptsd.mp3');
  song3 = loadSound('assets/letter.mp3');
  song4 = loadSound('assets/gc.mp3');
  song5 = loadSound('assets/ptsd.mp3');

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
  song4.loop();
  song4.stop();
  song5.loop();
  song5.stop();
}

function setup() {

  createCanvas(800, 800);
  background(255, 0, 0);
jug = loadFont('assets/jug.ttf');
ffm = loadFont('assets/ffm.otf');
dp = loadFont('assets/dp.ttf');
  yb = loadImage('assets/yb1.jpg');
  yb1 = loadImage('assets/herbo.jpg');
  yb2 = loadImage('assets/nipsey.jpg');
}

function draw() {
  switch (myState) {
    case 0:
      song1.play(); //starts state for sound
      myState = 1;
      break;

    case 1: //hanging out and listenig to music state
      image(yb, 0, 0, width, height);
      textFont(ffm,120);
      textSize(140);
      fill('white');
      text("NBA Youngboy", x, 600);
      x++;
      if (x > width) {
        x = 0;
      }
      break;

    case 2:
      song2.play(); //starts state for sound
      myState = 3;

      break;
    case 3:
      image(yb1, 0, 0, width, height);
      textFont(jug,120);
      textSize(140);
      text("SWERVO", x, 600);
      x++;
      if (x > width) {
        x = 0;
      }
      break;
    case 4:
      song3.play();
      myState = 5;

      break;
    case 5:
      image(yb2, 0, 0, width, height);
      textFont(dp,80);
      textSize(40);
      fill('white');
      text("Legendary", x, 600);
      x++;
      if (x > width) {
        x = 0;
      }
      break;




  }
  // put drawing code here
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();
  myState++;
  if (myState > 5) {
    myState = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
