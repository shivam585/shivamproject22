class Car{
   constructor(speed,v){
      



        this.x = Math.round( random(100,300))
        this.y = v;
        this.spt = createSprite(this.x,this.y);
        this.spt.scale=0.5;
        this.spt.velocityY = speed;
       
        var shapec=Math.round(random(1,4))
        switch(shapec){
        case 1:this.spt.shapeColor=("red")
        break;
        case 2:this.spt.shapeColor=("blue")
        break;
        case 3:this.spt.shapeColor=("yellow")
        break;
        case 4:this.spt.shapeColor=("green")
        break;



        }
    }
   
}


