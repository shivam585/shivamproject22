var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "serve";
var carAnimation, logAnimation, playerAnimation;
var school;
var city,ground1,ground20,road1;
var stripes,pool1,rutu,car1,car2,car10;
var log,road3,stripe3;
var log5,carimage1,carimage2,carimage3,logimage;
var shop,shopimage,nextarrow;
var restartbutton;                        ui

function preload()
{
  playerAnimation=loadImage("oldwoman.png") 
  carimage1=loadImage("yellowcar.png")
  carimage2=loadImage("greencar.png")
  carimage3=loadImage("bluecar.png") 
  shopimage=loadImage("pharmacy.png")
 
 
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

rutu=createSprite(width/1.1,height/2,20,80)
 rutu.shapeColor=("orange")
rutu.addImage(playerAnimation)
//rutu.debug=true
rutu.setCollider("rectangle",0,0,40,100)

nextarrow=createSprite(width/2.1,height/1.3,40,40)
nextarrow.shapeColor=("red")
 

shop=createSprite(width/30,height/2,20,20)
shop.addImage(shopimage)
shop.scale=0.5

restartbutton=createSprite(width/2.1,height/1.7,50,50)
restartbutton.shapeColor=("yellow")
restartbutton.visible=false
 }

function draw() {
  


  drawSprites();

  if(gameState==="serve"){
  rutu.visible=false
  road3.visible=false
  ground20.visible=false
  pool1.visible=false
  road1.visible=false
  shop.visible=false
 

  fill("red")
  textSize(30)
  textFont("Algerian")
  text("story",width/2.3,height/6)

  fill("blue")
  textSize(30)
  textFont("Algerian")
  text("an old lady wants to cross ",width/3,height/4.5)
  text("to cross the road but there are no ",width/3.7,height/3.7)
  text("zebra crossings nd traffic signals.",width/3.7,height/3.1)
  text("so you have to help her",width/3.1,height/2.7)
  text(" cross the road to reach the shop ",width/3.5,height/2.4)

  fill("green")
  textSize(30)
  textFont("Algerian")
  text("USE ARROW KEYS TO MOVE",width/2.9,height/1.5)
  text("PRESS THIS BUTTON TO START",width/2.9,height/1.2)

  }

  if(mousePressedOver(nextarrow)&&gameState==="serve"){
gameState="play"
  }

  if(gameState==="play"){
  
    car3()
    log4()
    car4()
  rutu.visible=true
  road3.visible=true
  ground20.visible=true
  pool1.visible=true
  road1.visible=true
  shop.visible=true
  nextarrow.visible=false
  restartbutton.visible=false
  }

  if(carGroup1.isTouching(rutu)||logGroup1.isTouching(rutu)){
  gameState="end1"
  }

  if(gameState==="end1"){
  carGroup1.destroyEach();
  logGroup1.destroyEach();
  rutu.x=width/1.1
  rutu.y=height/2
  fill("red")
  textSize(100)
  textFont("Algerian")
  text("OH NO",width/2.6,height/2)
 
  rutu.visible=false
  shop.visible=false
  restartbutton.visible=true
  }

if(mousePressedOver(restartbutton)&&gameState==="end1"||mousePressedOver(restartbutton)&&gameState==="win1"){
gameState="play"
}


if(rutu.isTouching(shop)){
gameState="win1"
}
if(gameState==="win1"){
  carGroup1.destroyEach();
  logGroup1.destroyEach();
  rutu.x=width/1.1
  rutu.y=height/2
  fill("yellow")
  textSize(100)
  textFont("Algerian")
  text("WO HOOOOOOO",width/3.4,height/2)
 
  rutu.visible=false
  shop.visible=false
  restartbutton.visible=true
  restartbutton.shapeColor=("orange")


}

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
  if(frameCount%30===0){
    car1=createSprite( Math.round( random(100,300)),height/10)
car1.scale=0.5;
car1.velocityY=6
carGroup1.add(car1)
//car1.debug=true
var shapeck=Math.round(random(1,3))
switch(shapeck){
case 1:car1.addImage(carimage1)
car1.scale=1.1
car1.setCollider("rectangle",0,0,40,100)
break;
case 2:car1.addImage(carimage2)
car1.scale=1.1
car1.setCollider("rectangle",0,0,40,100)
break;
case 3:car1.addImage(carimage3)
car1.setCollider("rectangle",0,0,40,100)
break;

}}


}   

function log4(){
  if(frameCount%20===0){
    log5=createSprite( Math.round( random(500,900)),height/10,20,50)
    
    log5.velocityY=6
    log5.shapeColor=("brown")
logGroup1.add(log5)


  }}

  function car4(){
    if(frameCount%30===0){

      car10=createSprite( Math.round( random(1000,1300)),height/10)
  car10.scale=0.5;
  car10.velocityY=6
  carGroup1.add(car10)
  //car10.debug=true
  var shapeck10=Math.round(random(1,3))
  switch(shapeck10){
    case 1:car10.addImage(carimage1)
    car10.scale=1.1
    car10.setCollider("rectangle",0,0,40,100)
    break;
    case 2:car10.addImage(carimage2)
    car10.scale=1.1
    car10.setCollider("rectangle",0,0,40,100)
    break;
    case 3:car10.addImage(carimage3)
    car10.setCollider("rectangle",0,0,40,100)
    break;
    
    }}
  
  
  }   
