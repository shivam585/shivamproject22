var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var city,ground1,ground20,road1;
var stripes,pool1,rutu,car1,car2;
var log,road3,stripe3;

function preload()
{
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
//city=createSprite(300,300,width,height)

  ground1=new ground(0,200)
 road1=new road(250,300)

pool1=new pool(700,600)
ground20=new ground2(1250,500)

for(var i=0;i<800;i=i+70){
  stripes=createSprite(250,i,10,i+40)
  stripes.shapeColor=("white")
   }

   road3=new road2(1150,300)
   
   for(var i=0;i<800;i=i+70){
    stripe3=new stripe2(1150,10)
     }

rutu=createSprite(width/20,height/2,20,80)
 rutu.shapeColor=("orange")

 
 }

function draw() {
  
 

  drawSprites();
  if (keyDown(RIGHT_ARROW)) {
    rutu.x=rutu.x+4;   
     }
    if (keyDown(LEFT_ARROW)) {
    rutu.x=rutu.x-4;   
     } 
     if (keyDown(UP_ARROW)) {
      rutu.y=rutu.y-4;   
       }
      if (keyDown(DOWN_ARROW)) {
      rutu.y=rutu.y+4;   
       } 

       if(frameCount%20===0){
        car1=new Car(6,height/10)
       }

       if(frameCount%20===0){
        car2=new Car2(6,height/10)
       }

       if(frameCount%30===0){
        log=new Log(6,height/10)
       }
      
}

