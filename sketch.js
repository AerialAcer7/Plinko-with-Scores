var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var divisions = [];
var particles = [];
var plinkos = [];
var gameState = "start";
var divisionHeight=300;
var particle;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
     }
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   for (var k = 0; k < divisions.length; k++){
     divisions[k].display();
   }

   for(var g = 0;g<particles.length;g++){
   if(particles[g] != 0){
   particles[g].display();
   console.log(particles[g].body.position.x);
   if(particles[g].body.position.y>600){
   if(particles[g].body.position.x>0 && particles[g].body.position.x<160){
     score = score+100;
     particles[g] = 0;
  }

  if(particles[g].body.position.x>160 && particles[g].body.position.x<240){
   score = score+200;
   particles[g] = 0; 
  }

  if(particles[g].body./*position.*/x>240 && particles[g].body.position.x<320){
   score = score+300; 
   particles[g] = 0; 
  }
  if(particles[g].body.position.x>320 && particles[g].body.position.x<400){
    score = score+200;
    particles[g] = 0; 
  }
  if(particles[g].body.position.x>400 && particles[g].body.position.x<480){
    score = score+100;
    particles[g] = 0; 
  }
  
  }
   }  
  }
}

function mousePressed(){
 if(gameState === "start"){
 particle = new Particle(mouseX,10,10); 
 particles.push(particle);
 visible = false;
 }
}