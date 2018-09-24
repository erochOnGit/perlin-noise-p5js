var xoff1 = 0;
var xoff2 = 10000;
let circles = [];
function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < 5; i++) {
    let xoff1 = random() * 10;
    let xoff2 = random() * 10000;
    console.log(xoff1, xoff2);
    c = new circle(xoff1, xoff2);

    circles.push(c);
  }
}

function draw() {
  background(51);
  console.log("heyt");
  circles.forEach(circle => {
    circle.draw();
  });
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24);
}

class circle {
  constructor(xoff1, xoff2) {
    this.y;
    this.x;
    this.xoff1 = xoff1;
    this.xoff2 = xoff2;
  }

  actualize() {
    this.x = map(noise(this.xoff1), 0, 1, 0, width);
    this.y = map(noise(this.xoff2), 0, 1, 0, height);

    this.xoff1 += 0.02;
    this.xoff2 += 0.02;
  }

  draw() {
    this.actualize();
    ellipse(this.x, this.y, 24, 24);
  }
}

class toto {}
