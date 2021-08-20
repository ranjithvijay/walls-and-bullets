var bullet,wall,thickness;
var speed , weight;


function setup() {
  createCanvas(1600,400);
  bullet= createSprite (50,200,90,20);
  bullet.shapeColor = "white"
  wall = createSprite(1000,200,thickness,height/4);
  wall.shapeColor= "blue";
 thickness = random(22,83);
 speed = random(223,321);
weight = random(30,52);


 

}

function draw() {
  background("black");
  bullet.velocityX=speed;
 if(hascollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor = color(255,0,0);
   }
   if(damage<10){
     wall.shapecolor = color (0,255,0)
   }


 }


 
  
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightedge = bullet.x + bullet.width;
  wallLeftedge = wall.x;
  if (bulletRightedge>=wallLeftedge){
    return true
  }
   return false

}