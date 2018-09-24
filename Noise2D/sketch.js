let inc = 0.05;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  loadPixels();
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < height; y++) {
      // let brightness = random(255);
      let brightness = noise(xoff, yoff) * 255;
      var index = (x + y * width) * 4;
      pixels[index + 0] = brightness;
      pixels[index + 1] = brightness;
      pixels[index + 2] = brightness;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  noLoop();
}
