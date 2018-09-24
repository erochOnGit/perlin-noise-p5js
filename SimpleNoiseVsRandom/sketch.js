var xoff = 0;

function setup (){
    createCanvas(640, 480);
}

function draw (){
    background(51);

    var x = map(noise(xoff), 0, 1, 0, width);
    // var x = random() * 1000;
    xoff += 0.01;


    ellipse(x, 200, 24, 24);
}