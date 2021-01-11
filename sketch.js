const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var matter,world
var polygon,slingshot
var box1;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

 ground=new Ground(600,375,1200,10);

  plat1=new Ground(900,276,300,13);
  plat2=new Ground(570,167,200,11.275);
  
 
 
  
}

function draw() {
  background("red");  
  drawSprites();
  ground.display();
  plat1.display();
  plat2.display();
  
  box1.display();
  
}