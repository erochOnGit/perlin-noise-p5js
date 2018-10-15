let video;
let vScale = 16;

function setup() {
  createCanvas(window.innerWidth - 10, window.innerHeight - 10);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0]; // r value from the video
      let g = video.pixels[index + 1]; // g value from the video
      let b = video.pixels[index + 2]; // b value from the video

      let brightness = (r + g + b) / 3;
      fill(brightness);
      rect(x * vScale, y * vScale, vScale, vScale);
    }
  }
  // updatePixels();
}
