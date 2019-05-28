let rows = 30;
let columns = 30;
let coordinates = [];
let widthMultp;
let heightMultp;
let dots = [];
let circles = [];
let rectangles = [];
let crosses = [];
let vectors = [];
let scale = 10;
let zoff = 0;
let inc = 0.05;
let particles = [];

function setup() {
  createCanvas(1920, 1080);
  widthMultp = width / columns;
  heightMultp = height / rows;
  for (let x = 0; x < columns - 0; x++) {
    particles.push(new Particule("dot"));
    for (let y = 0; y < rows - 0; y++) {
      // console.log("y : ", y);
      vectors.push(createVector(random(5), random(5), random(5)));
    }
  }
  background(255);
}

//racinecarré de 5 plus 1 sur 2
function draw() {
  // background(255);
  translate(0, 0);

  // // Draw gray box
  stroke(0, 10);
  strokeWeight(1);
  // for (let i = 1; i < columns; i++) {
  //   line(widthMultp * i, 0, widthMultp * i, height);
  // }
  // for (let i = 1; i < rows; i++) {
  //   line(0, heightMultp * i, width, heightMultp * i);
  // }
  let xoff = 0;
  for (let x = 0; x < columns - 10; x++) {
    let yoff = 0;
    for (let y = 0; y < rows - 6; y++) {
      var index = y + x * (columns - 6);
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      // let mag = noise(xoff, yoff, zoff) * 16;
      vectors[index].rotate(angle - vectors[index].heading());
      vectors[index].setMag(10); //mag);
      // stroke(100, 100, 200);
      // push();
      // translate(
      //   widthMultp * y + 3 * widthMultp,
      //   heightMultp * x + 5 * heightMultp
      // );
      // rotate(vectors[index].heading());
      // strokeWeight(1);
      // line(0, 0, vectors[index].mag(), 0);
      // pop();

      // stroke(100, 150, 100);
      // push();
      // translate(
      //   widthMultp * y + 3 * widthMultp + 3,
      //   heightMultp * x + 5 * heightMultp
      // );
      // rotate(vectors[index].heading());
      // strokeWeight(1);
      // line(0, 0, vectors[index].mag(), 0);
      // pop();

      // stroke(200, 50, 150);
      // push();
      // translate(
      //   widthMultp * y + 3 * widthMultp,
      //   heightMultp * x + 5 * heightMultp + 3
      // );
      // rotate(vectors[index].heading());
      // strokeWeight(1);
      // line(0, 0, vectors[index].mag(), 0);
      // pop();
      yoff += inc;
    }
    xoff += inc;
  }
  zoff += 0.005;

  particles.forEach((particle, index) => {
    particle.follow(vectors);
    particle.update();
    particle.edges();
    particle.show();
  });

  // crosses.forEach(cross => {
  //   cross.draw();
  // });
  // dots.forEach(dot => {
  //   dot.draw();
  // });
  // circles.forEach(circle => {
  //   circle.draw();
  // });
  // rectangles.forEach(rect => {
  //   rect.draw();
  // });
  // noLoop();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
