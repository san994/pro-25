class DustBin {

  constructor(x,y){
    
    this.image = loadImage("dustbingreen.png");
    this.width = 200
    this.height = 210
    this.x = x;
    this.y = y;
    this.thickness =  20
    this.bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic : true})
    this.leftWall = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
    this.rightWall = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
     
      World.add(world,this.bottom);
      World.add(world,this.leftWall);
      World.add(world,this.rightWall);

  }

  display(){

   push()
   translate(this.leftWall.position.x,this.leftWall.position.y)
   rectMode(CENTER)
   fill(255)
   angleMode(RADIANS)
   rotate(this.angle);
   //rect(0,0,this.thickness,this.height);
   pop()

   push()
   translate(this.rightWall.position.x,this.rightWall.position.y)
   rectMode(CENTER)
   fill(255)
   angleMode(RADIANS)
   rotate(this.angle*-1);
   //rect(0,0,this.thickness,this.height);
   pop()

   push()
   translate(this.bottom.position.x,this.bottom.position.y)
   rectMode(CENTER)
   fill(255)
   angleMode(RADIANS)
   rotate(this.angle);
   //rect(0,0,this.width,this.thickness);
   imageMode(CENTER)
   image(this.image,0,-this.height/2,this.width,this.height);
   pop()

  }

}