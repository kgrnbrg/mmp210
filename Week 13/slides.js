///section 1 initial setup
//var player;
//function setup() {
//	createCanvas(720,360);
//    player = createSprite(100, 100, 40, 40);
//}
//
//function draw() {
//	background("black");  
//    drawSprites();
//}




///section 2 key and obstacle

//var player;
//var platform;
//var obstacle;
//var gravity = 1;
//var speed = 0.5;
//
//function setup() {
//	createCanvas(720,360);
//    player = createSprite(100, 100, 40, 40);
//    platform = createSprite(width/2, height, width, 20);
//    obstacle = createSprite(300, height, 60, 40);
//}
//
//function draw() {
//	background("black"); 
//    
//    if ( keyDown("a") ) {
//	player.velocity.x -= speed;
//    } else if ( keyWentDown("d") ) {
//	player.velocity.x += speed;
//}
//    if ( player.collide(platform) ) {
//	player.velocity.y = 0;
//}
//    if ( player.collide(obstacle) ) {
//	player.remove();
//}
//    player.velocity.y += gravity;
//    
//    drawSprites();
//    
//}


//section 3 jumping 
//var player;
//var platform; 
//var speed = 0.5;
//var gravity = 1;
//var obstacle;
//var jump = 20;
//var jumping = false;
//
//function setup() {
//	createCanvas(720,360);
//    player = createSprite(100, 100, 40, 40);
//    platform = createSprite(width/2, height, width, 20); 
//    obstacle = createSprite(300, height, 60, 40);
//}
//
//function draw() {
//	background("black");  
//
//    if ( keyDown( "space" ) && !jumping ) {
//	player.velocity.y -= jump;
//	jumping = true;
//    }
//    
//    if ( keyDown("a") ) {
//	player.velocity.x -= speed;
//
//    } else if ( keyWentDown("d") ) {
//	player.velocity.x += speed;
//    }
//    
//    player.velocity.y += gravity;
//    
//    if ( player.collide(platform) ) {
//	player.velocity.y = 0; 
//    if (jumping) jumping = false;}
//    
//    if ( player.collide(obstacle) ) {
//	player.remove();
////    player.position.x = 100;
////    player.position.y = 0;
////    player.velocity.x = 0;
////    alert("you dead!");
//        
//    }
//    drawSprites();
//
//}
