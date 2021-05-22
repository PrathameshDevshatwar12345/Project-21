var ball;
var redblock,yellowblock,greenblock,orangeblock;
var edges;
var music_sound;

function preload() {
    music_sound=loadSound("beep.mp3");
}

function setup() {
    createCanvas(825,635);

    ball=createSprite(Math.round(random(100,725)),Math.round(random(50,200)),20,20);
    ball.shapeColor="white";
    //ball.setVelocity(Math.round(random((-5),5)),Math.round(random(1,5)));
    ball.setVelocity(7,7);

    redblock=createSprite(105,615,200,15);
    redblock.shapeColor="red";
    
    yellowblock=createSprite(310,615,200,15);
    yellowblock.shapeColor="yellow";
    
    greenblock=createSprite(515,615,200,15);
    greenblock.shapeColor="green";

    orangeblock=createSprite(720,615,200,15);
    orangeblock.shapeColor="orange";
}

function draw() {
    background("black");

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    music_sound.play();

    if (ball.isTouching(redblock)) {
        ball.bounceOff(redblock);
        ball.shapeColor="red";
        music_sound.play();
    }

    if (ball.isTouching(yellowblock)) {
        ball.bounceOff(yellowblock);
        ball.shapeColor="yellow";
        music_sound.play();
    }

    if (ball.isTouching(greenblock)) {
        //ball.bounceOff(greenblock);
        ball.shapeColor="green";
        ball.setVelocity(0,0);
        music_sound.stop();
    }

    if (ball.isTouching(orangeblock)) {
        ball.bounceOff(orangeblock);
        ball.shapeColor="orange";
        music_sound.play();
    }

    drawSprites();
}