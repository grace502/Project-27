
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	//Create the Bodies Here.
Bob1= new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,40)
Bob2= new Bob(startBobPositionX-bobDiameter,startBobPositionY,40)
Bob3= new Bob(startBobPositionX,startBobPositionY,40)
Bob4= new Bob(startBobPositionX+bobDiameter,startBobPositionY,40)
Bob5= new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  drawSprites();
 
}



