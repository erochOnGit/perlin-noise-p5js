function setup (){
    createCanvas(640, 480);
}

function draw (){    
    background(51);
    stroke(255);
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
        stroke(255);
        vertex(x,random(height));
    }
    endShape()
    noLoop()
}