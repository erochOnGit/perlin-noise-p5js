let inc = 0.1;
let scale = 10;
let columns, rows;

let zoff = 0;
let particules = [];
let flowfield = [];

let fr;

function setup() {
  createCanvas(200, 200);
  columns = floor(width / scale);
  rows = floor(height / scale);
  fr = createP("");

  flowfield = new Array(columns * rows);
  for (let i = 0; i < 100; i++) {
    particules[i] = new Particule();
  }
}

function draw() {
  background(255);
  let yoff = 0;
  for (let x = 0; x < columns; x++) {
    let xoff = 0;
    for (let y = 0; y < rows; y++) {
      // let brightness = random(255);
      var index = x + y * columns;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let vector = p5.Vector.fromAngle(angle);
      vector.setMag(0.1);
      flowfield[index] = vector;
      xoff += inc;
      stroke(0, 50);
      push();
      translate(x * scale, y * scale);
      rotate(vector.heading());
      strokeWeight(1);
      line(0, 0, scale, 0);
      pop();
      // fill(brightness);
      // rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
    zoff += 0.0001;
  }
  // particules.forEach(particule => {
  //   particule.follow(flowfield);
  //   particule.update();
  //   particule.show();
  //   particule.edges();
  // });

  // noLoop();
  fr.html(floor(frameRate()));
}
