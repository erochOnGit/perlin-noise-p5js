function setup() {
  createCanvas(640, 480);
}

let start = 0;
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  let a = 1;
  for (let x = 0; x < width; x++) {
    stroke(255);
    // let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += 0.02;
  }
  endShape();
  // noLoop()
  start += 0.02;
  // a++;
}
