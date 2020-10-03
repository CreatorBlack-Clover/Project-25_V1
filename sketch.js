// variables
var engine, world, paper,ground1,ground2;

// physics rules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	// creating the engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// paper
	var paper_options =
	{
		restitution: 0.3,
		friction: 0.5,
		density: 1.2


	}
	paper = Bodies.circle(50,200,15,paper_options);
	World.add(world,paper);

	// Ground options
	var ground_options =
	{
		isStatic: true,
		
	}

	// yellow ground one
	ground1 = Bodies.rectangle(400,300,800,20,ground_options);
	World.add(world,ground1);
	

	// yellow ground two
	ground2 = Bodies.rectangle(400,680,800,20,ground_options);
	World.add(world,ground2);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  
  // drawing paper
  ellipse(paper.position.x, paper.position.y,30);

  // drawing yellow grounds
  rect(ground1.position.x, ground1.position.y, 800,20);
  rect(ground2.position.x, ground2.position.y, 800,20);

  drawSprites();
 
}



