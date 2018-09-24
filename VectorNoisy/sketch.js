let inc = 0.1;
let scale = 10;
let comlumns, rows;
let fr;

function setup() {
  createCanvas(200, 200);
  comlumns = floor(width / scale);
  rows = floor(height / scale);
  fr = createP("");
}

function draw() {
  let yoff = 0;
  for (let x = 0; x < comlumns; x++) {
    let xoff = 0;
    for (let y = 0; y < rows; y++) {
      // let brightness = random(255);
      var index = (x + y * width) * 4;
      let brightness = noise(xoff, yoff) * 255;
      let vector = p5.Vector.fromAngle(random(TWO_PI));
      xoff += inc;
      stroke(0);
      push();
      translate(x * scale, y * scale);
      rotate(vector.heading());
      line(0, 0, scale, 0);
      pop();
      // fill(brightness);
      // rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
  }
  // noLoop();
  fr.html(floor(frameRate()));
}
