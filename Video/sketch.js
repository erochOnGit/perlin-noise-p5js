let video;
let videbuttono;
let snapshots = [];
let count = 0;

function setup() {
  createCanvas(800, 240);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);
  // button = createButton("snap");
  // button.mousePressed(ready());
}

let go = false;
let ready = () => {
  go = true;
};

function draw() {
  // tint(255, 0, 150);
  if (go) {
    snapshots[count] = video.get();
    count++;
    if (count == 40) {
      count = 0;
    }
    let w = 80;
    let h = 60;
    let x = 0;
    let y = 0;
    for (let i = 0; i < snapshots.length; i++) {
      // tint(255, i * 25, x * 25, 50);
      let index = (i + frameCount) % snapshots.length;
      image(snapshots[index], x, y, w * 2, h * 2);
      x = x + w;
      if (x > width) {
        x = 0;
        y = y + h;
      }
    }
  }
  // noLoop();
}
