
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
dustbin=new Dustbin(600,680)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1=new Paper(20,20,50)

	Engine.run(engine);
  var options={ isStatic:true}
  
  ground=Bodies.rectangle(400,680,800,20,options);
  World.add(world,ground)

}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,this.width,20);
  
 paper1.display();
 dustbin.display();
}



