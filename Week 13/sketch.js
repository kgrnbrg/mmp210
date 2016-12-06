var player;
var speed = 0.5;
var jump = 20;
var jumping = false;

var gravity = 1;

var platform;
var obstacle;

function setup() {
    createCanvas(720, 360);
    
    player = createSprite(100, 100, 40, 40);
    
    platform = createSprite(width/2, height, width, 20);
    obstacle = createSprite(300, height, 60, 80);
}

function draw() {
    background("black");
    
    if ( keyDown("space") && !jumping ) {
        player.velocity.y -= jump;
        jumping = true;
    }
    
    if ( keyDown("a") ) {
        player.velocity.x -= speed;   
    } else if ( keyDown("d") ) {
        player.velocity.x += speed;
    }
    
    player.velocity.y += gravity;
    if ( player.collide(platform) ) {
        player.velocity.y = 0;
        if (jumping) jumping = false;
    }
    
    if ( player.collide(obstacle) ) {
        //player.remove();
        player.position.x = 100;
        player.position.y = 0;
        player.velocity.x = 0;
        alert("you dead!");
    }
    
    drawSprites();
}