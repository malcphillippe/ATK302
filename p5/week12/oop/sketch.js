var maxcars = 20;
var cars = [];
var frogPos;
var myState = -1;
var maxtime = 12 * 60;
var timer = 0;
var spongebob
var scary
var party
var song1;
var song2;
var song3;
var song4;
var x = 0;
var shark;
var fish;
function preload() {
  song1 = loadSound('assets/bK.mp3');
  song2 = loadSound('assets/gotstar.mp3');
  song3 = loadSound('assets/playerdead.mp3');
  song4 = loadSound('assets/level-win.mp3');

}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  imageMode(CENTER);
  spongebob = loadFont('assets/spongeBob.ttf');
  scary = loadFont('assets/scary.ttf');
  party = loadFont('assets/party.TTF');
  welcome = loadImage('assets/welcome.png');
shark = loadImage('assets/shark.png');
fish = loadImage('assets/fish.png');
  for (var i = 0; i < maxcars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);
  //song1.loop();
  //song1.stop();
  //song2.loop();
  // song2.stop();
  // song3.loop();
  // song3.stop();
  // song4.loop();
  // song4.stop();
}

function draw() {
  switch (myState) {
    case -1:
      song2.loop();
      myState = 0;
      break;
    case 0:
      background('Blue')
      image(welcome, width/2, height/2, width, height);
      textFont(spongebob, 120);
      textSize(60);
      fill('225, 228, 71, 100');
      text("Click To Play", x, 650);
      x++;
      if (x > width) {
        x = 0;
      }

      break;

    case 1:
      game();
      timer++;
      if (timer > maxtime) {
        myState = 3;
        song1.pause();
        song4.loop();
      }
      break;

    case 2: //win state

      background('yellow');
      textFont(party, 120);
      textSize(140);
      fill('0, 203, 255, 100');
      text("Congratulations", width/2, height/2);
      break;

    case 3:
      background('yellow');
      fill('black')
      textFont(scary, 120);
      textSize(140);
      text("Try Again", width/2, height/2);
      x++;
      if (x > width) {
        x = 0;
      }
      break;



  }
}

function reset() {
  timer = 0;
    song3.pause();
    song4.pause();
    song2.play();
  cars = [];
  for (var i = 0; i < maxcars; i++) {
    cars.push(new Car());
  }
  frogPos.x = width / 2;
  frogPos.y = height - 100;
}

function game() {
  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
  song1.stop();
    song3.loop();
    myState = 2;

  }
  // frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
image(shark,frogPos.x, frogPos.y, 150,170);
  checkForKeys();

}

function mouseReleased() {
  switch (myState) {
    case 0:
    song2.pause();
    song1.loop();
      myState = 1;
      break;
    case 2:
      myState = 0;
      reset();

      break;
    case 3:
      myState = 0;
      reset();
      break;

  }

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}


// our Car class!!!!!
function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  // methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30, 30);
    image(fish,this.pos.x, this.pos.y, 50, 50 );
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}
