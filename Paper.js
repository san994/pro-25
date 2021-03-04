class Paper{
      
     constructor(x,y){
      
      var option = {

        isStatic : false,
        friction : 0,
        density : 1.5,
        restitution : 0.2
    
        }
    
        this.body = Bodies.circle(x,y,20,option);
        
       this.image = loadImage("paperBall.png");
  
       World.add(world,this.body);
  
    

    }
  
    display(){
  
   var pos = this.body.position;
   fill("pink")
     ellipseMode(CENTER)
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,50,50);
     // ellipse(pos.x,pos.y,70,70);
   
   
    }
  
  }