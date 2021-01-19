const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin,ball,bin ,binImg;

function preload()
{
	binImg = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
;
	 bin = createSprite(620,600,20,80);
	 bin.addImage(binImg);	
	 bin.scale = 0.45;

	 

	bin1 = new Dustbin(560,600,20,130);
	bin2 = new Dustbin(610,670,110,20);
	bin3 = new Dustbin(680,600,20,130);
	ball = new Ball(100,600,20)
	ground = new Ground(400,680,800,10)
	
  
}


function draw() {
  
	Engine.update(engine)
	background(0);
	
	bin1.display();
	bin2.display();
	bin3.display();
	ground.display();
	bin.display();
	ball.display();
	
	
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.ball,ball.ball.position,{x:65,y:-85});
	}
}

