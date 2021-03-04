
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var engine,world;

var dustBin;
var paper;
//var invisible;
var ground;

function preload()
{
    
// dustBinImage = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

 

	//Create the Bodies Here.
    dustBin = new DustBin(650,440);

    paper  = new Paper(200,440);
    ground = new Ground(400,450,900,10);
    

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  
  ground.display();
  dustBin.display();

  paper.display();
 
}

function keyPressed(){

if(keyCode  === UP_ARROW){

 Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-85})

}


}


