let inc = 0.1;

let particules = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < 200; i++) {
    particules[i] = new Particule();
  }
}

function draw() {
  clear();
  particules.forEach((particule, index) => {
    for (let i = index + 1; i < particules.length; i++) {
      if (
        distBis(
          particules[i].position.x,
          particules[i].position.y,
          particule.position.x,
          particule.position.y
        ) <= 70
      ) {
        strokeWeight(1);
        stroke(0, 0, 0, 80);
        line(
          particules[i].position.x,
          particules[i].position.y,
          particule.position.x,
          particule.position.y
        );
      }
    }
    particule.update();
    particule.show();
    particule.edges();
  });
}
let distBis = (x, y, xBis, yBis) => {
  return Math.sqrt(Math.pow(x - xBis, 2) + Math.pow(y - yBis, 2));
};
