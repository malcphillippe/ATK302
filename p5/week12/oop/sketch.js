var maxcars = 20;
var cars = [];
var frogPos;
var myState = 0;
var maxtime = 12*60;
var timer = 0 ;

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < maxcars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);

}

function draw() {
  switch (myState) {
    case 0:
      background('Blue')
      text("Howdy Folks", 100, 100);
      break;

    case 1:
      game();
      timer++;
      if (timer > maxtime) {
        myState = 3;
      }
      break;

    case 2: //win state
      background('yellow');
      fill('green')
      text("Congratulations", 100, 100);
      break;

    case 3:
      background('yellow');
      fill('green')
      text("Try Again", 100, 100);
      break;



  }
}
function reset() {
  timer = 0;
  cars = [];
  for (var i = 0; i < maxcars; i++) {
    cars.push(new Car());
  }
  frogPos.x = width/2;
  frogPos.y = height-100;
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
  myState = 2;
}
  // frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();

}

function mouseReleased() {
  switch (myState) {
    case 0:
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
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 30, 30);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}
