
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;
var counter = 72;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
  }

  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75,10));    
  }

  for (let j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175,10));    
  }

  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275,10));    
  }

  for (let j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,375,10));    
  }

  ground = new Ground(width/2,height - 10,width,20);


  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
  }

for (let k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

for (let j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
}

for (let i = 0; i < particles.length; i++) {
  particles[i].display();
}

ground.display();


drawSprites();
}
