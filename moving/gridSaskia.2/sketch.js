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
let flowfield = [];
let scale = 10;
let zoff = 0;
let inc = 0.05;
let particules = [];
let previous;
function setup() {
  createCanvas(windowWidth, windowHeight);
  widthMultp = width / columns;
  heightMultp = height / rows;
  for (let x = 5; x < columns - 5; x++) {
    for (let y = 3; y < rows - 3; y++) {
      vectors.push(createVector(random(5), random(5), random(5)));
    }
  }
  flowfield = new Array(columns * rows);
  for (let i = 0; i < 20; i++) {
    particules[i] = new Particule();
  }
  // previous == createVector(0, 0);
  background(0);
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
  let position = createVector(0, 0);
  for (let x = 0; x < columns; x++) {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      flowIndex = y + x * columns;

      position.x = widthMultp * y;
      position.y = heightMultp * x;
      if (x >= 5 && x < columns - 5 && y >= 3 && y < rows - 3) {
        var index = y - 3 + (x - 5) * (columns - 6);
        let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        // let mag = noise(xoff, yoff, zoff) * 16;
        vectors[index].rotate(angle - vectors[index].heading());
        vectors[index].setMag(5); //mag);
        stroke(100, 100, 200);
        push();
        translate(position.x, position.y);
        rotate(vectors[index].heading());
        strokeWeight(1);
        // line(0, 0, vectors[index].mag(), 0);
        pop();
        // let vector = vectors[index];
        flowfield[flowIndex] = vectors[index];
      } else {
        let vector = createVector(1, 0, 0);

        let dx = width / 2 - position.x;
        let dy = height / 2 - position.y;
        let angle = Math.atan2(dy, dx); //+ Math.PI * 2.5;
        vector.rotate(angle - vector.heading());
        vector.setMag(25);

        flowfield[flowIndex] = vector;
        stroke(100, 100, 200);
        push();
        translate(position.x, position.y);

        rotate(vector.heading());
        strokeWeight(1);
        // line(0, 0, vector.mag(), 0);
        pop();
      }
      yoff += inc;
    }
    xoff += inc;
  }
  zoff += 0.005;

  particules.forEach((particule, index) => {
    particule.follow(flowfield);
    particule.update();
    if (previous) {
      particule.show(previous.x, previous.y, noise(index, zoff));
    }
    // particule.show();
    particule.edges();
    previous = createVector(particule.position.x, particule.position.y);
  });
  // console.log(vectors);
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
  background(0);
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
