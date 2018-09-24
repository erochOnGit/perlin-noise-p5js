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
  for (let x = 0; x < width; x++) {
    stroke(255);
    let n = map(noise(xoff), 0, 1, 0, height);
    let s = map(sin(xoff), -1, 1, 0, height);
    let y = s + n;
    //    let y = random(height)
    // let y = noise(xoff) * height;
    vertex(x, y);

    xoff += 0.02;
  }
  endShape();
  // noLoop()
  start += 0.02;
}
