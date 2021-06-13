class Aliens{
    constructor(x,y,width,height){
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            
        }
        this.image = loadImage("images/pic10.png");
        this.image1 = loadImage("images/pic7.png");
        this.alien = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.alien);
    }
 
    display(){
     var pos = this.alien.position;
     imageMode(CENTER);

   
 
     image(this.image,pos.x,pos.y+70,this.width,this.height);
     if(this.alien.speed > 3){
         World.remove(world,this.alien);
         image(this.image1,pos.x,pos.y+70,this.width,this.height);
     }
    }
}