
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, boy;
var stone1,tree;
var mango1, mango2, mango3;

function preload()
{
	boyImg = loadImage("Mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,600,10,10)
	boy.addImage(boyImg);
	boy.scale = 0.1;
	//Create the Bodies Here.
	ground = new Ground(200, 340, width, 20);
	stone1 = new Stone(140,540,400);
	//tree = new Tree(100,100,40,30);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground.display();
  stone1.display();
  //tree.display();

  drawSprites();
 
}



