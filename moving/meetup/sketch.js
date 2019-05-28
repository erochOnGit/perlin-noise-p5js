let rows = 20;
let columns = 20;
let coordinates = [];
let widthMultp;
let heightMultp;
let dots = [];
let circles = [];
let rectangles = [];
let crosses = [];
let colors = [
  [32, 48, 96],
  [88, 72, 128],
  [136, 80, 144],
  [248, 128, 176],
  [248, 192, 216]
];
// let colors = [
//   [9, 71, 81],
//   [255, 54, 66],
//   [255, 104, 123],
//   [255, 125, 95],
//   [255, 189, 171]
// ];
// let colors = [
//   [255, 246, 161],
//   [251, 186, 170],
//   [238, 200, 249],
//   [161, 224, 242],
//   [187, 236, 182]
// ];
// let colors = [
//   [55, 121, 224],
//   [36, 152, 232],
//   [198, 211, 222],
//   [245, 98, 98],
//   [232, 61, 61]
// ];
function setup() {
  createCanvas(windowWidth, windowHeight);
  widthMultp = width / columns;
  heightMultp = height / rows;
  for (let x = 5; x < columns - 5; x++) {
    for (let y = 3; y < rows - 3; y++) {
      if (Math.round(Math.random(1 + sqrt(5) / 2))) {
        coordinates.push({ x: x, y: y });
        dots.push(
          new Dot(
            x * widthMultp,
            y * heightMultp,
            random(7) + 2,
            colors[floor(random(colors.length - 1))]
          )
        );
        if (Math.round(Math.random(1 + sqrt(5) / 2))) {
          circles.push(
            new Circle(
              x * widthMultp,
              y * heightMultp,
              random(5) + 1,
              colors[floor(random(colors.length - 1))]
            )
          );
          if (Math.round(Math.random(1 + sqrt(5) / 2))) {
            rectangles.push(
              new Rectangle(
                x * widthMultp,
                y * heightMultp,
                random(5) + 1,
                colors[floor(random(colors.length - 1))]
              )
            );
            if (Math.round(Math.random(1 + sqrt(5) / 2))) {
              crosses.push(
                new Cross(
                  x * widthMultp,
                  y * heightMultp,
                  random(7) + 1,
                  colors[floor(random(colors.length - 1))]
                )
              );
            }
          }
        }
      }
    }
  }
}

//racinecarré de 5 plus 1 sur 2
function draw() {
  background(255);
  translate(0, 0);

  // // Draw gray box
  stroke(153);
  // strokeWeight(1);
  // for (let i = 1; i < columns; i++) {
  //   line(widthMultp * i, 0, widthMultp * i, height);
  // }
  // for (let i = 1; i < rows; i++) {
  //   line(0, heightMultp * i, width, heightMultp * i);
  // }
  crosses.forEach(cross => {
    cross.draw();
  });
  dots.forEach(dot => {
    dot.draw();
  });
  circles.forEach(circle => {
    circle.draw();
  });
  rectangles.forEach(rect => {
    rect.draw();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
