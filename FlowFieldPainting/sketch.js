let inc = 0.1;
let scale = 10;
let comlumns, rows;

let zoff = 0;
let particules = [];
let flowfield = [];
let tmp = 0;

let fr;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  comlumns = floor(width / scale);
  rows = floor(height / scale);
  fr = createP("");

  flowfield = new Array(comlumns * rows);
  for (let i = 0; i < 5; i++) {
    particules[i] = new Particule();
  }
}

function draw() {
  // background(255);
  let yoff = 0;
  for (let x = 0; x < comlumns; x++) {
    let xoff = 0;
    for (let y = 0; y < rows; y++) {
      // let brightness = random(255);
      var index = x + y * comlumns;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 5;
      let vector = p5.Vector.fromAngle(angle);
      vector.setMag(0.5);
      flowfield[index] = vector;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scale, y * scale);
      // rotate(vector.heading());
      // strokeWeight(1);
      // line(0, 0, scale, 0);
      // pop();
      // fill(brightness);
      // rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
    zoff += 0.0001;
  }
  tmp += 1;
  particules.forEach(particule => {
    particule.follow(flowfield);
    particule.update();
    particule.edges();
    particule.show(tmp);
  });

  // noLoop();
  fr.html(floor(frameRate()));
}
