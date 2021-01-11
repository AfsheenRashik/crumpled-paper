
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var paper,box1,box2,box3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	myEngine = Engine.create();
	myWorld= myEngine.world;

	//Create the Bodies Here.
	 ground1 = new Ground (600,350,1200,20);

	 box2 = new Basket(900,280,20,100)
	box1 = new Basket(1000,330,190,20);
	box3 = new Basket(1100,280,20,100)

	paper = new Ball(100,330,20);


	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  box2.display();
  box1.display();
  box3.display();
  
  ground1.display();

  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode   ===  UP_ARROW) {
	  
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	   
	 }
	 
	 
   }



