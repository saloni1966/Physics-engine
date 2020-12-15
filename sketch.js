const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var myengine, myworld;
var adi;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld =  myengine.world;

  var adi_options = {
    isStatic : true
  }
  adi = Bodies.rectangle(400,380,800,20, adi_options);
  World.add(myworld,adi);


  console.log(adi.position.x);
  console.log(adi.position.y);







  
}

function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(adi.position.x,adi.position.y,800,20);
  
}