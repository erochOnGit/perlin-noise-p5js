var video;

function setup() {
  createCanvas(320, 240);
  // if you work on Hi-density display you need to add the following line
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = video.pixels[index + 0]; // r value from the video
      var g = video.pixels[index + 1]; // g value from the video
      var b = video.pixels[index + 2]; // b value from the video

      let brightness = (r + g + b) / 3;

      pixels[index + 0] = brightness;
      pixels[index + 1] = brightness;
      pixels[index + 2] = brightness;
      pixels[index + 3] = 255; // alpha value
    }
  }
  updatePixels();
}
