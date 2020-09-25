var carR, carG, carY;
var wall ;
var speed, weight ; 

function setup() {
  createCanvas(400, 400);
  
  carR = createSprite(100, 300, 10, 10);
  carR.shapeColor = "red" ;

  carG = createSprite(100, 300, 10, 10);
  carG.shapeColor = "green";

  wall = createSprite(350, 200, 10, 400 );
  wall.shapeColor = "white";

  speed = random(55, 90);
  weight = random(400, 1500);

  carR.velocityX = speed;
}

function draw() {
  background("black");  
  
 if(wall.x - carR.x <(carR.widht + wall.widht)/2)
 {
   carR.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if(deformation<180 && deformation>100)
   {
     carR.shapeColor = color(255, 0, 0);
   }

   if(deformation<100)
   {
       carR.shapeColor = color(0, 255, 0);
       carG.shapeColor = color(0, 255, 0);
   }
  }

  if(carR.isTouching(wall)){

  }

  drawSprites();
}