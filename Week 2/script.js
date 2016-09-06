

function setup(){
    createCanvas(500, 500);
    createElement('h1', 'My favorite number below.');
    console.log("Hey");
}
function mousePressed(){
    createP("My favorite number is " + random(0,10)); 
}
function draw(){
        background(0);
        fill (255,0,0);
        rect(100,100,50,50);
    }

//var red = 0;
//var redIncrement = 50;
//
//fill(red, 0, 0);
//ellipse(red, 50, redIncrement, redIncrement);
//
//red += redIncrement;
//fill(red, 0, 0);
//ellipse(red, 50, redIncrement, redIncrement);
//
//red += redIncrement;
//fill(red, 0, 0);
//ellipse(red, 50, redIncrement, redIncrement);
//
//red += redIncrement;
//fill(red, 0, 0);
//ellipse(red, 50, redIncrement, redIncrement);
//
//
//red += redIncrement;
//fill(red, 0, 0);
//ellipse(red, 50, redIncrement, redIncrement);
//}



