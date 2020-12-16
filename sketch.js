var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var Paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	
 

	ground = new Ground(width/2, 650, width, 10 , Option );
	 World.add(world, ground);
	 
	 log1 = createSprite(600,640,200,20 ,{isStatic:true});
     World.add(world,log1)

	
	log2 = createSprite(500,600,20,100 ,{isStatic:true});
	 World.add(world,log2)
	 
	 log3 = createSprite(700,600,20,100,{isStatic:true});
	 World.add(world,log3)
     
   log4 = createSprite(600,300,30,30,{isStatic:true})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  log1.shapeColor="red";
  log2.shapeColor="red";
  log3.shapeColor="red";
  log1.display();
  log2.display();
  log3.display();
  log4.display();
 

  
  
  
 
}

function keyPressed()
{
  if (keyCode === DOWN_ARROW)
  {
    log4.velocityY=3;
  }
}

