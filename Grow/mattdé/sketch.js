let dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      dots.push({ x: random(width), y: random(height) });
    }
  }
}

function draw() {
  dots.forEach(dot => {
    stroke(50);
    strokeWeight(3);
    point(dot.x, dot.y);
  });
  // let firstPoint = floor(random(dots.length));
  // let point1 = firstPoint;
  // let point2 = floor(random(dots.length));
  let dotsFake = dots;
  console.log(ch(dots));
  // for (let i = 0; i < dots.length; i++) {
  //   point1 = point2;
  //   point2 = floor(random(dotsFake.length));
  //   console.log(dotsFake[point1]);
  //   console.log(dotsFake[point2]);
  //   line(
  //     dotsFake[point1].x,
  //     dotsFake[point1].y,
  //     dotsFake[point2].x,
  //     dotsFake[point2].y
  //   );
  //   dotsFake.splice(point1, 1);
  // }

  // line(dots[point2].x, dots[point2].y, dots[firstPoint].x, dots[firstPoint].y);
  // noLoop();
}
