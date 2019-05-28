let rows = 20;
let columns = 20;
let coordinates = [];
let widthMultp;
let heightMultp;
let dots = [];
let circles = [];
let rectangles = [];
let crosses = [];
let vectors = [];
let flowField = [];
let scale = 10;
let zoff = 0;
let inc = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  widthMultp = width / columns;
  heightMultp = height / rows;
  for (let x = 5; x < columns - 5; x++) {
    for (let y = 3; y < rows - 3; y++) {
      // console.log("y : ", y);
      vectors.push(createVector(random(5), random(5), random(5)));
    }
  }
  flowfield = new Array(columns * rows);
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
  for (let x = 0; x < columns; x++) {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      flowIndex = x + y * columns;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      if (x >= 8 && x < columns - 8 && y >= 5 && y < rows - 5) {
        let vector = p5.Vector.fromAngle(angle);
        vector.setMag(0.1);
        flowfield[flowIndex] = vector;
        stroke(100, 200, 100, 50);
        fill(0, 0);
        push();
        translate(widthMultp * y, heightMultp * x);
        rotate(vector.heading());
        strokeWeight(5);
        // line(0, 0, vector.mag(), 0);
        arc(60, 25, 20, 50, 0, HALF_PI);
        pop();
      }
      if (x >= 5 && x < columns - 5 && y >= 3 && y < rows - 3) {
        // var index = y - 3 + (x - 5) * (columns - 6);
        // let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        // // let mag = noise(xoff, yoff, zoff) * 16;
        // vectors[index].rotate(angle - vectors[index].heading());
        // vectors[index].setMag(10); //mag);
        // stroke(100, 100, 200);
        // push();
        // translate(widthMultp * y, heightMultp * x);
        // rotate(vectors[index].heading());
        // // console.log(vectors[index].heading());
        // strokeWeight(1);
        // line(0, 0, vectors[index].mag(), 0);
        // pop();
        // flowField[flowIndex] = vectors[index];
        // } else {
        let vector = p5.Vector.fromAngle(angle);
        vector.setMag(0.1);
        flowfield[flowIndex] = vector;
        stroke(200, 100, 100);
        push();
        translate(widthMultp * y, heightMultp * x);
        rotate(vector.heading());
        strokeWeight(5);
        // line(0, 0, vector.mag(), 0);
        arc(20, 25, 40, 60, 0, HALF_PI);
        pop();
      }
      if (x >= 3 && x < columns - 3 && y >= 1 && y < rows - 1) {
        let vector = p5.Vector.fromAngle(angle);
        vector.setMag(0.1);
        flowfield[flowIndex] = vector;
        stroke(100, 100, 200);
        push();
        translate(widthMultp * y, heightMultp * x);
        rotate(vector.heading());
        strokeWeight(5);
        // line(0, 0, vector.mag(), 0);
        arc(50, 55, 50, 50, 0, HALF_PI);
        pop();
        // flowField[flowIndex] = null;
      }
      yoff += inc;
    }
    xoff += inc;
  }
  zoff += 0.005;
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// if (Math.round(Math.random(1 + sqrt(5) / 2))) {
//   coordinates.push({ x: x, y: y });
//   dots.push(
//     new Dot(
//       x * widthMultp,
//       y * heightMultp,
//       random(7) + 2,
//       colors[floor(random(colors.length - 1))]
//     )
//   );
//   if (Math.round(Math.random(1 + sqrt(5) / 2))) {
//     circles.push(
//       new Circle(
//         x * widthMultp,
//         y * heightMultp,
//         random(5) + 1,
//         colors[floor(random(colors.length - 1))]
//       )
//     );
//     if (Math.round(Math.random(1 + sqrt(5) / 2))) {
//       rectangles.push(
//         new Rectangle(
//           x * widthMultp,
//           y * heightMultp,
//           random(5) + 1,
//           colors[floor(random(colors.length - 1))]
//         )
//       );
//       if (Math.round(Math.random(1 + sqrt(5) / 2))) {
//         crosses.push(
//           new Cross(
//             x * widthMultp,
//             y * heightMultp,
//             random(7) + 1,
//             colors[floor(random(colors.length - 1))]
//           )
//         );
//       }
//     }
//   }
// }
