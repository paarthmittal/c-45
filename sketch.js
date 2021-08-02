var car11,back1,shooters2,shooters;
var sGroup,sGroup2,bullet
function preload(){
  ben11=loadAnimation("images/ben1.png","images/ben2.png","images/ben3.png")
  ben21=loadAnimation("images/ben1.png","images/ben2.png","images/ben3.png")

benhit11=loadAnimation("images/ben hit1.png")
benhit21=loadAnimation("images/ben hit 2.png")
car11-loadImage("images/car1.png")
shooter11=loadImage("images/shooter.png")
shooterAn=loadAnimation("images/shooter2.png","images/shooter3.png")
wall11=loadImage("images/wall1.png")
back1=loadImage("images/download.jpg")
bullet1=loadImage("images/images.png")
}

function setup(){
  createCanvas(800,400)
big1=createSprite(90,250,50,50)
big1.addAnimation('play',ben11)
big1.addAnimation('play2',benhit11)
big1.addAnimation('play3',benhit21)
big1.addAnimation('playA',ben21)
big1.setCollider("rectangle",30,0,big1.width-180,big1.height-80)
big1.debug=true
sGroup=createGroup()
sGroup2=createGroup()

}
function draw(){
background(back1)

rand1=Math.round(random(200,300))
rand2=Math.round(random(200,300))

if(keyWentDown("h")){
  big1.changeAnimation('play2',benhit11)
  big1.setCollider("rectangle",170,-70,150,50)
}

if(keyWentDown("g")){
big1.changeAnimation('play3',benhit21)
big1.setCollider("rectangle",150,100,100,50)
}
if(keyWentUp("h")||keyWentUp("g")){
  big1.changeAnimation('play',ben11)
  big1.setCollider("rectangle",30,0,big1.width-180,big1.height-80)
}

if(frameCount%rand1==0){
  shooters=createSprite(750,150,50,50)
  shooters.velocityX=-4.5
  shooters.addImage('shoot',shooter11)
  sGroup.add(shooters)
  bullet=createSprite(shooters.x-20,shooters.y,5,5)
  bullet.addImage("bull",bullet1)
  bullet.velocityX=-4.5
  bullet.scale=0.05
  }
if(frameCount%rand2==0){
  shooters2=createSprite(750,300,50,50)
  shooters2.velocityX=-4.5
  shooters2.addImage('shoot',shooter11)
  sGroup2.add(shooters2)
}
if(big1.isTouching(sGroup)){
  sGroup.destroyEach()
  bullet.lifetime=1
}
if(big1.isTouching(sGroup2)){
  sGroup2.destroyEach()
  bullet.lifetime=1
}
  drawSprites()
}