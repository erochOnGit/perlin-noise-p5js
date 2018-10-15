let inc = 0.1;

let particules = [];
let particulesRed = [];
let particulesBlue = [];
let particulesYellow = [];
let particulesGrosse = [];

let n = 0;
let angle = 6.2;
let c = 7; //distance between the points

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < 10; i++) {
    particules[i] = new Particule();
  }
  for (let i = 0; i < 1; i++) {
    particulesGrosse[i] = new Particule();
  }
  for (let i = 0; i < 1; i++) {
    particulesRed[i] = new Particule();
  }
  for (let i = 0; i < 1; i++) {
    particulesBlue[i] = new Particule();
  }
  for (let i = 0; i < 25; i++) {
    particulesYellow[i] = new Particule();
  }
}

function draw() {
  // clear();
  particulesYellow.forEach(particule => {
    particule.update();
    particule.showPhyllo(width / 2, height / 2, 10, 50, n, angle, c);
    particule.edges();
  });
  if (n > 500) {
    particulesYellow.forEach(particule => {
      particule.update();
      particule.showPhyllo(width / 2, height / 2, 50, 50, n - 500, angle, c);
      particule.edges();
    });
  }
  if (n > 1000) {
    particulesYellow.forEach(particule => {
      particule.update();
      particule.showPhyllo(width / 2, height / 2, 100, 50, n - 1000, angle, c);
      particule.edges();
    });
  }
  if (n > 1500) {
    particulesYellow.forEach(particule => {
      particule.update();
      particule.showPhyllo(width / 2, height / 2, 150, 50, n - 1500, angle, c);
      particule.edges();
    });
  }
  if (n > 2000) {
    particulesYellow.forEach(particule => {
      particule.update();
      particule.showPhyllo(width / 2, height / 2, 200, 50, n - 2000, angle, c);
      particule.edges();
    });
  }
  // if (n > 2500) {
  //   particulesYellow.forEach(particule => {
  //     particule.update();
  //     particule.showPhyllo(width / 2, height / 2, 250, 50, n - 2500, angle, c);
  //     particule.edges();
  //   });
  // }
  if (n < 2500) {
    particulesGrosse.forEach(particule => {
      particule.update();
      particule.showBig(250, 6, 700);
      particule.edges();
    });
    particules.forEach(particule => {
      particule.update();
      particule.show();
      particule.edges();
    });
  }
  particulesRed.forEach(particule => {
    particule.update();
    particule.showCircle(150, 10);
    particule.edges();
  });
  particulesBlue.forEach(particule => {
    particule.update();
    particule.showCircle(250, 50);
    particule.edges();
  });
  n++;
}
