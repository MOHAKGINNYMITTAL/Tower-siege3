var ball,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(50,250,20,20);
    
}

function draw(){
    background("black");
    if(keyDown("space")){
        ball.velocityX=+1;
        ball.velocityY=+1;
    }
    drawSprites();
}

