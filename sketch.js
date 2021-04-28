var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy
var fairy_Img

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairy_Img = loadImage("fairyImage1.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy = createSprite(400,375);
	fairy.addImage(fairy_Img);
	fairy.scale = 0.2;
	fairy.setCollider('circle',200, 150, 350);
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (fairy.isTouching(star)) {
	Matter.Body.setStatic(starBody,true); 
}
if (keyDown('RIGHT_ARROW')) {
	fairy.x = fairy.x+10;
}
if (keyDown('LEFT_ARROW')) {
	fairy.x = fairy.x+-10;
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
}
