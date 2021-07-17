class Log{
    constructor(speed,l){
        this.x = Math.round( random(500,1000))
        this.y = l;
        this.w = 30;
        this.h = 60
        this.spt = createSprite(this.x,this.y,this.w,this.h);
       
        this.spt.velocityY = speed;
       
        this.spt.shapeColor=("brown")
    }

   
}