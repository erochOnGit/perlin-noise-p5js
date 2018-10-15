let inc = 0.1;

let particules = [];
let particulesRed = [];
// let particulesBlue = [];
// let particulesYellow = [];
let n;
// let ar = [];
let angle;
let c;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < 10; i++) {
    particules[i] = new Particule();
  }

  for (let i = 0; i < 5; i++) {
    particulesRed[i] = new Particule();
  }
  // for (let i = 0; i < 5; i++) {
  //   particulesBlue[i] = new Particule();
  // }
  // for (let i = 0; i < 5; i++) {
  //   particulesYellow[i] = new Particule();
  // }
  n = 0;
  // let ar = [];
  angle = 5;
  c = 7; //distance between the points
}

function draw() {
  // clear();

  particulesRed.forEach(particule => {
    particule.update();
    particule.showPhyllo(width / 2, height / 2, 250, 2, n, angle, c, 30);
    particule.edges();
  });

  particulesRed.forEach(particule => {
    particule.update();
    particule.showPhyllo(width / 2, height / 2, 250, 2, n, angle, c, 15);
    particule.edges();
  });

  particulesRed.forEach(particule => {
    particule.update();
    particule.showPhyllo(width / 2, height / 2, 250, 2, n, angle, c, 5);
    particule.edges();
  });
  // particulesBlue.forEach(particule => {
  //   particule.update();
  //   particule.showPhyllo(width / 3, height / 3, 250, 40, n, angle, c);
  //   particule.edges();
  // });

  // particules.forEach(particule => {
  //   particule.update();
  //   particule.show();
  //   particule.edges();
  // });

  // if (n > 1000) {
  //   particulesYellow.forEach(particule => {
  //     particule.update();
  //     particule.showPhyllo(
  //       width / 1.5,
  //       height / 1.5,
  //       10,
  //       40,
  //       n - 1000,
  //       angle,
  //       c
  //     );
  //     particule.edges();
  //   });
  // }
  // let a = n * Math.PI * (3 - Math.sqrt(angle));
  // let r = c * Math.sqrt(n);

  // let x = r * Math.cos(a) + 250;
  // let y = r * Math.sin(a) + 400;

  // console.log(Math.cos(a), Math.sin(a), c * Math.sqrt(n));

  // for (let i = 0; (i < Math.random() * 8) | 0; i++) {
  //   ar.push({ x: x, y: y });
  // }

  n += 0.007;
}
