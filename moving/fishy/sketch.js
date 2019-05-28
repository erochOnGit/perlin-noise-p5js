let inc = 0.1;
let scale = 90;
let comlumns, rows;
let zoff = 0;
let particules = [];
let flowfield = [];
let time;

let fr;

function setup() {
  createCanvas(windowWidth, windowHeight);
  comlumns = floor(width / scale);
  rows = floor(height / scale);
  fr = createP("");

  flowfield = new Array(comlumns * rows);
  for (let i = 0; i < 50; i++) {
    particules[i] = new Particule();
  }
  time = 0;
}

function draw() {
  // background(255);

  let yoff = 0;
  for (let x = 0; x < comlumns; x++) {
    let xoff = 0;
    for (let y = 0; y < rows; y++) {
      // let brightness = random(255);
      var index = x + y * comlumns;
      let angle = (noise(xoff, yoff, zoff) * TWO_PI) / 2;
      let vector = p5.Vector.fromAngle(angle);
      vector.setMag(0.1);
      flowfield[index] = vector;
      xoff += inc;
      stroke(0, 50);
      push();
      translate(x * scale, y * scale);
      rotate(vector.heading());
      strokeWeight(1);
      // line(0, 0, scale, 0);
      pop();
      // fill(brightness);
      // rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
    zoff += 0.0001;
  }
  particules.forEach((particule, index) => {
    particule.follow(flowfield);
    particule.update(time);
    particule.show();
    particule.edges();
  });

  // noLoop();
  fr.html(floor(frameRate()));
  strokeWeight(1);
  fill(255, 255, 255, 2);
  rect(0, 0, windowWidth, windowHeight);

  time += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
