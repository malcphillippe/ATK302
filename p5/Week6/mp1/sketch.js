function setup() {
  // put setup code here
createCanvas(800,800);
ellipseMode(CENTER);
}

function draw() {
  // put stuff you always want to be in here
background(121,191,232);

//  if (mouseIsPressed) {
    //this is the ;pressed'state
    //head
        rect(50, 50, 50, 50);
        fill(128,87,6);
        ellipse(391,378,500,500);


    //eyes
       fill("white")
       ellipse(320,308,70,80);
       fill("white")
       ellipse(450,308,70,80);



    //pupills
        fill("black")
        ellipse(318,308,40,35);
        fill("black");
        ellipse(450,308,40,35);




    //nose
        noFill();
        arc(363,413 , 60, 60, radians(130), radians(225));
        line(20, 40, 80, 40);
        strokeWeight(2); // Beastly
        arc(410,413 , 60, 60, radians(-40), radians(60));
        arc(350,433, 27,35, radians(200), radians(380));
        arc(410,433, 27,34, radians(180), radians(380));
        arc(410,413 , 60, 60, radians(320), radians(00));



    //tongue
        fill("red")





        //hair
          fill(0);
           ellipse(518,140,60,60);
           ellipse(518,140,60,60);
           ellipse(550,173,60,60);
           ellipse(547,213,60,60);
           ellipse(547,250,60,60);
           ellipse(547,270,60,60);
           ellipse(547,300,60,60);
           ellipse(547,330,60,60);
           ellipse(547,360,60,60);
           ellipse(547,390,60,60);
           ellipse(547,420,60,60);
           ellipse(547,460,60,60);
           ellipse(547,490,60,60);
           ellipse(547,520,60,60);
           ellipse(547,560,60,60);
           ellipse(547,610,60,60);
           ellipse(547,650,60,60);
           ellipse(547,700,60,60);
           ellipse(547,140,60,60);

    //second loc
    fill("black")
           ellipse(390,126,60,60);
           ellipse(383,150,60,60);
           ellipse(383,200,60,60);
           ellipse(383,230,60,60);
           ellipse(383,270,60,60);

    //first loc
    fill("black")
           ellipse(251,175,60,60);
           ellipse(251,210,60,60);
           ellipse(251,250,60,60);
           ellipse(251,300,60,60);
           ellipse(251,330,60,60);
           ellipse(251,370,60,60);
           ellipse(251,410,60,60);
           ellipse(251,430,60,60);
           ellipse(251,470,60,60);
           ellipse(251,510,60,60);
           ellipse(251,540,60,60);
           ellipse(251,570,60,60);
           ellipse(251,610,60,60);
           ellipse(251,640,60,60);
           ellipse(251,670,60,60);
           ellipse(251,700,60,60);



           ellipse(183,223,60,60);
           ellipse(215,186,60,60);
           ellipse(286,142,60,60);
           ellipse(333,129,60,60);
           ellipse(434,129,60,60);
           ellipse(474,134,60,60);
           ellipse(586,222,60,60);
           ellipse(584,180,60,60);
           ellipse(614,258,60,60);
           ellipse(166,260,60,60);
           ellipse(186,564,60,60);
           ellipse(300,640,60,60);
           ellipse(299,696,60,60);
           ellipse(298,751,60,60);
          ellipse(349,649,60,60);
          ellipse(342,704,60,60);
          ellipse(392,699,60,60);
          ellipse(456,698,60,60);
          ellipse(451,745,60,60);
ellipse(399,652,60,60);
ellipse(606,532,60,60);
ellipse(493,636,60,60);
ellipse(440,650,60,60);
ellipse(187,615,60,60);
ellipse(182,666,60,60);
ellipse(185,704,60,60);
ellipse(608,584,60,60);
ellipse(605,637,60,60);
ellipse(609,695,60,60);



// non-pressed state
//head
    rect(50, 50, 50, 50);
    fill(128,87,6);
    ellipse(391,378,500,500);









//eyes
   fill("white")
   ellipse(320,308,70,80);
   fill("white")
   ellipse(450,308,70,80);



//pupills
    fill("black")
    ellipse(318,308,40,35);
    fill("black");
    ellipse(450,308,40,35);


//mole
fill("black")
circle(476,361, 20);

//nose
    noFill();
    stroke("black")
    arc(363,413 , 60, 60, radians(130), radians(225));
    line(20, 40, 80, 40);
    strokeWeight(2); // Beastly
    stroke("black")
    arc(410,413 , 60, 60, radians(-40), radians(60));
    arc(350,433, 27,35, radians(200), radians(380));
    arc(410,433, 27,34, radians(180), radians(380));
    arc(410,413 , 60, 60, radians(320), radians(00));

fill(255,153,135,100);
rect(352, 491, 65, 60);






    //eyebrows
    stroke(186,112,13,73)
    line(283,217,359,270);
    line(400,274,474,212);

}





function mousePressed() {

console.log(mouseX + ","+ mouseY);
}
