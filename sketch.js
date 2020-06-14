const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 var ground ;
var paper;
var box1,box2,box3

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, width, 10 );
	paper = new Paper(100,620,15);

	box2 = new Box(1000,650,200,20);
	box1 = new Box(1100,610,20,100);
	box3 = new Box(900,610,20,100);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  ground.display();
paper.display();

box2.display();
box1.display();
box3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-30});
	}
}

