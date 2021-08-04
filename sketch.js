var runner, runnerAnm;
var path, pathImg;
var leftWall, rightWall;

function preload(){
  runnerAnm = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);


  path = createSprite(200, 300, 50, 50)
  path.addImage(pathImg)
  path.velocityY = 20
  
  
  runner = createSprite(200, 300, 50, 50)
  runner.addAnimation("running", runnerAnm)

  leftWall = createSprite(50, 300, 20, 600) 
  leftWall.visible = false
  

  rightWall = createSprite(358, 300, 20, 600)
  rightWall.visible = false 

  
}

function draw() {
  background(0);

  runner.collide(leftWall)
  runner.collide(rightWall)

  if (path.y > 500){
    path.y = path.width/2
  }
  
  if (keyDown("left")){
    runner.x = runner.x - 5
  }
  if (keyDown("right")){
    runner.x = runner.x + 5
  }


  drawSprites()
}

