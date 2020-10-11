

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,food
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
   
}
function setup() {
  createCanvas(400, 400);
  monkey=createSprite(100,315,100,20)
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)

 // ground.x=ground.width/2;
 // console.log(ground.x);
   
  ground.x = ground.width/2;  
     ground.velocityX=-4
bannaGroup=new Group();
 obstacleGroup=new Group();
}


function draw() { 
  background("white"); 
  ground.shapeColor=("grey"); 
  ground.x = ground.width/2; 
  monkey.collide(ground); 
  //jump when the space key is pressed 
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12; } 
  spawnfood()
  spawnObstacle()
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  if(bannaGroup.isTouching(monkey)){
   bannaGroup.destroyEach();  }
   if(obstacleGroup.isTouching(monkey)){
    //ground.velocityX = 0;
    // monkey.velocityY = 0; 
    obstacleGroup.setVelocityXEach(0); 
  bannaGroup.setVelocityXEach(5);
     obstacleGroup.setLifetimeEach(-1); 
     bannaGroup.setLifetimeEach(0); 
  
   }
  var survivalTime=0
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+ score,500,50);
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50)
  drawSprites(); 
}

function spawnfood(){
  if (frameCount % 300 === 0){
     var food = createSprite(0,Math.round(random(20, 370)), 10, 10);
 food.addImage(bananaImage);
    food.velocityX=3
  food.lifetime = 60;
  food.scale =0.1;  
 bannaGroup.add(food)
}
}

function spawnObstacle(){
  if (frameCount % 100 === 0){ 
   var obstacle = createSprite(300,330,20,40);
 obstacle.velocityX = -3
  obstacle.addImage(obstaceImage);
 obstacle.scale=0.1
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle)
}
}