let inc = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let brightness = random(255);
      var index = (x + y * width) * 4;
      pixels[index + 0] = brightness;
      pixels[index + 1] = brightness;
      pixels[index + 2] = brightness;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  noLoop();
}
