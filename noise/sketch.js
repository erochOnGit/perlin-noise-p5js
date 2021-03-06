let inc = 0.1;
let scale = 10;
let comlumns, rows;

let zoff = 0;
let particules = [];
let flowfield = [];

let fr;

function setup() {
  createCanvas(400, 400);
  comlumns = floor(width / scale);
  rows = floor(height / scale);
  fr = createP("");

  flowfield = new Array(comlumns * rows);
  for (let i = 0; i < 2500; i++) {
    particules[i] = new Particule();
  }
}

function draw() {
  let yoff = 0;
  for (let x = 0; x < comlumns; x++) {
    let xoff = 0; 
    for (let y = 0; y < rows; y++) {
      var index = x + y * comlumns;
      let angle;
      if (index > 400) {
        angle = cos(noise(xoff, yoff, zoff)) * TWO_PI;
      } else {
        angle = noise(xoff, yoff, zoff) * TWO_PI;
      }
      let vector = p5.Vector.fromAngle(angle);
      vector.setMag(0.5);
      flowfield[index] = vector;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;
    zoff += 0.0001;
  }
  particules.forEach(particule => {
    particule.follow(flowfield);
    particule.update();
    particule.edges();
    particule.show();
  });

  // noLoop();
  fr.html(floor(frameRate()));
}
