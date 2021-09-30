var ball;


function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,40,40);

}

function draw() {
  background(220);

  if(keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-5;
  }

  drawSprites();

}