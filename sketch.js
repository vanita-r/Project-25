var paperObj, dustbinObj, dustbinSpr;
var paper;
var ground;
var dustbin, dustbin2, dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperObj=loadImage("paper.png");
	dustbinObj=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	dustbinSpr=createSprite(1150,473,300,300);
	dustbinSpr.addImage(dustbinObj)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,600,70);
	ground = new Ground(750,650,1500,20);
	dustbin = new DustBin(1150,630,200,10);
	dustbin2 = new DustBin(1250,495,10,260);
	dustbin3 = new DustBin(1050,495,10,260);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:1150,y:-1330});

	}
}



