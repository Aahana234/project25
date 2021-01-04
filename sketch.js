
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine,myWorld,ground;
var dustbinObject,paperObject,ground;


function setup() {
	createCanvas(1600,800);


	myEngine = Engine.create();
	myWorld = myEngine.world;


 dustbinObject = new Dustbin(1260,500);
 
paperObject = new Paper(200,400,40);

  ground = new Ground(600,400,1200,20);
  //create a ground

  var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
      wireframes: false
    }
  });
  Engine.run(myEngine);
	Render.run(render); 
  
   }


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(myEngine);

paperObject.display();
dustbinObject.display();

ground.display();



  
}

function keyPressed(){

if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:150,y:- 150});
}

}

