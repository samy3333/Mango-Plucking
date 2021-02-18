
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var elastic;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200, 100, 30);
	mango3= new mango(1000, 70, 30);
	mango4= new mango(900, 180, 30);
	mango5= new mango(1000, 200, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone= new Stone(250, 340, 50);
	elastic= new Elastic(stone.body, {x:900, y:180});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  stone.display();
  elastic.display();
  mouseDragg

}

function mouseDragged(){
	Matter.body.setPosition(bird.body, {x: mouseX, y:mouseY});
}