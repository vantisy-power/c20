var movingRect;
var fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,30,10);
  movingRect = createSprite(100,200,30,10);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green"
  

}



function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="red";
  movingRect.shapeColor = "red";
}
 else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green"
 }


  drawSprites();
}