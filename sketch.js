var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1;
function preload()
{
	
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	
	
 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(width/2,650,200,20);
	box1Sprite.shapeColor=("red");
	
	box2Sprite=createSprite(700,610,20,100);
	box2Sprite.shapeColor=("red");

	box3Sprite=createSprite(900,610,20,100);
	box3Sprite.shapeColor=("red");

	engine = Engine.create();
	world = engine.world;
	

	ball = Bodies.circle(200,600  , 20, {restitution:0.3, isStatic:true});
	World.add(world, ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	 box1 = Bodies.rectangle(width/2,655,width,10,{isStatic:true});
	 World.add(world,box1);

	 var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } })

  
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	  
   
	   
	 }
   }



