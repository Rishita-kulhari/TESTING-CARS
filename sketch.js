// creating variables
var car;
var wall;
var speed,weight;

// function setup
function setup() {

  //creating canvas
  createCanvas(1600,400);

  // wall
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "green";

  // car
  car = createSprite(50,200,50,50);
  car.shapeColor = "green";
  car.velocityX = 100;
  
  // speed,weight
  speed = random(55,90);
  weight = random(400,1500);
}

// function draw
function draw() {

  // background
  background(102,255,255);  
  
  // text
  fill("black");
  text("reload the site to check each deformation",600,35);

  // if condition for deformation
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
        car.shapeColor=color(255,0,0);
        fill("red");
        text("DANGEROUS",600,250);
    }
    if(deformation<180 && deformation>100)
    {
        car.shapeColor=color(230,230,0);
        fill("yellow");
        text("AVERAGE",600,250);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
      fill("green");
      text("GOOD",600,250);
    }

  }
  //draw sprites
  drawSprites();
}
// THE END:)