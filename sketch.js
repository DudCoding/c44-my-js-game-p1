var player, alienBoss, stone, bgImg;  
var playerImg, alienBossImg, stoneImg, ufoImg;
var gameState = "start";

function preload(){
    bgImg = loadImage("galaxy.jpg");
    alienBossImg = loadImage("alien image.jpg");
    ufoImg = loadImage("ufo.jpg");
    playerImg = loadImage("spaceship.jpg");
    stoneImg = loadImage("space stone.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    player = createSprite(width/2 - 150,height-150,50,50);
    player.addImage(playerImg);
    player.scale = .5;

    alienBoss = createSprite(width/2 - 150, height/2+55,50,50);
    alienBoss.addImage(ufoImg);
    // alienBoss.velocityX = 6;
    // alienBoss.velocityY = -4; 


    stone = createSprite(width/2-150, alienBoss.y + 99,50,50);
    stone.addImage(stoneImg);
    stone.scale = .79;
    // stone.velocityX = 6;
    // stone.velocityY = -4; 




}

function draw(){
    background(bgImg);

    drawSprites();
    if(gameState === "start"){
        fill("red");
        textSize(25);
        text("You have a powerful stone but that alien is stealing it! You must catch him and get it back!", width/2-376, height/2 - 300 );
        text("Press space to begin hunting!", width/2-336, height/2 - 265 );
        if(keyDown("space")){
            gameState = "chase begins";

        }

        
    }

    if(gameState === "chase begins"){
        stone.velocityX = 6;
        stone.velocityY = -4; 

        alienBoss.velocityX = 6;
        alienBoss.velocityY = -4; 
    }

}