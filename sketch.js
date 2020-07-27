const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2, box1,polygon;

function preload(){

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,300,330,20);
  ground2 = new Ground(150,390,50,5);
  
  box1 = new Box(405,280,30,30);
  box2 = new Box(595,280,30,30);
  box3 = new Box(600,280,30,30);
  box4 = new Box(625,280,30,30);
  box5 = new Box(570,280,30,30);
  box6 = new Box(550,230,30,30);
  box7 = new Box(425,280,30,30);
  box8 = new Box(450,280,30,30);
  box9 = new Box(475,280,30,30);
  box10 = new Box(500,250,30,30);
  box11 = new Box(400,250,30,30);
  box12 = new Box(425,250,30,30);
  box13 = new Box(450,250,30,30);
  box14 = new Box(415,210,30,30);
  box15 = new Box(420,210,30,30);
  box16 = new Box(440,210,30,30);
  box17 = new Box(480,100,30,30);
  box18 = new Box(500,100,30,30);
  box19 = new Box(565,100,30,30);
  box20 = new Box(570,100,30,30);
  
  polygon = Bodies.circle(150,280,40,[5]);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:150,y:350})

  Engine.run(engine);
}

function draw() {
  background(255,255,255); 
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  rect(this.polygon.position.x, this.polygon.position.y,50,50);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})

}
function mouseReleased(){
  slingshot.fly();
}