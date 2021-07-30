
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1
var ground1
var leftwall
var rightwall
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(150,200,30)
	ground1 = new Ground(400,400,2000,20)
	leftwall = new Ground(420,300,20,200)
	rightwall = new Ground(465,300,20,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground1.display();
  leftwall.display();
  rightwall.display();
  drawSprites();
 
}



