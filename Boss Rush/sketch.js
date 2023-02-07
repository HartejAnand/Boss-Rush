var player, ground, playerI, bg, bgI;
var playerHealth = 100;
var speed, health, damage, delay;
var boss;
var boss1, boss2, boss3, boss4;
var timer = 0;
var restart = true;
var roboImage, roboDeath, roboAttack;
var logo, logoI;
var bulletI;
var shoot;


function preload(){
  logoI = loadAnimation("logo0.png", "logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo4.png", "logo2.png", "logo1.png", "logo3.png", "logo2.png", "logo3.png", "logo4.png", "logo1.png", "logo0.png", "logo1.png", "logo4.png");
  bgI = loadAnimation("crash2.png", "crash.png", "crash.png");
  playerI = loadAnimation("player1.png", "player2.png");

  bulletI = loadAnimation("bullet1.png", "bullet2.png");

  roboImage = loadAnimation("robo1.png", "robo2.png", "robo1.png", "robo3.png");
  roboDeath = loadAnimation("robodeath.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth/15,windowHeight/15);
  bg.addAnimation("bg", bgI);
  bg.scale=windowWidth/2000;

  logo=createSprite(windowWidth*9/10,windowHeight/10,windowWidth/15,windowHeight/15);
  logo.addAnimation("glitch", logoI);
  logo.scale=windowWidth/10000;

  player=createSprite(windowWidth/10,windowHeight/2,windowWidth/15,windowHeight/15);
  player.addAnimation("player", playerI);
  player.scale=windowWidth/10000;
  player.debug=true;
  player.setCollider("rectangle",0,0,windowWidth/2.2, windowHeight*1.5);

  ground=createSprite(windowWidth/2,windowHeight,windowWidth,windowHeight/15);

  boss1 = new RoboBoss();
}

function draw() {
  background(0, 255, 255);
  timer++;
 // console.log(timer);
  console.log(health);

  player.velocityY=4;//gravity
  player.bounce(ground);
  ground.y=windowHeight;

  //controls
  if(keyDown("left") && player.x>0){
    player.x-=5;
  }
  if(keyDown("right") && player.x<windowWidth){
    player.x+=5;
  }
  if((keyDown(" ") || keyDown("up")) && player.isTouching(ground)){
    player.y-=windowHeight/10;
  }
  if(keyDown("down")){
    shoot= new Bullet();
    shoot.display();
  }

  //death
  if(playerHealth<=0){
    background(255,0,0);
  }

  //creating boss
  boss1.display();

  drawSprites();
  
  //displaying health
  fill(0, 150, 0);
  textSize(100);
  text("Health: " + playerHealth, windowWidth/15, windowHeight/5)
}