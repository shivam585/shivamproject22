var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var city,ground1,ground20,road1;
var stripes,pool1,rutu,car1,car2,car10;
var log,road3,stripe3;
var log5

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
  
 car3();
 log4();
 car4();

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

      
}

function car3(){
  if(frameCount%20===0){
    car1=createSprite( Math.round( random(100,300)),height/10)
car1.scale=0.5;
car1.velocityY=6
var shapeck=Math.round(random(1,4))
switch(shapeck){
case 1:car1.shapeColor=("red")
break;
case 2:car1.shapeColor=("blue")
break;
case 3:car1.shapeColor=("yellow")
break;
case 4:car1.shapeColor=("green")
break;
}}


}   

function log4(){
  if(frameCount%20===0){
    log5=createSprite( Math.round( random(500,900)),height/10,20,50)
    
    log5.velocityY=6
    log5.shapeColor=("brown")



  }}

  function car4(){
    if(frameCount%20===0){
      car10=createSprite( Math.round( random(1000,1300)),height/10)
  car10.scale=0.5;
  car10.velocityY=6
  var shapeck10=Math.round(random(1,4))
  switch(shapeck10){
  case 1:car10.shapeColor=("red")
  break;
  case 2:car10.shapeColor=("blue")
  break;
  case 3:car10.shapeColor=("yellow")
  break;
  case 4:car10.shapeColor=("green")
  break;
  }}
  
  
  }   
