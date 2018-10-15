let exampleGrid = [
  [1, 1, 1], //this is a 2dimensional array
  [1, 1, 1],
  [1, 1, 1]
];

let grid;
let next;
let dA = 1;
let dB = 0.5;
let feed = 0.55;
let k = 0.062;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  grid = [];
  next = [];
  for (let x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (let y = 0; y < height; y++) {
      grid[x][y] = { a: random(1), b: random(1) };
      next[x][y] = { a: 0, b: 0 };
    }
  }
}
function draw() {
  background(51);

  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      a = grid[x][y].a;
      b = grid[x][y].b;
      next[x][y].a = a + dA * laplaceA(x, y) * a - a * b * b + feed * (1 - a);
      next[x][y].b = b + dB * laplaceB(x, y) * b - a * b * b + k + feed * b;
    }
  }

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pix = (x + y * width) * 4;
      pixels[pix + 0] = floor(next[x][y].a * 255);
      pixels[pix + 1] = 0;
      pixels[pix + 2] = floor(next[x][y].b * 255);
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
}

let laplaceA = (x, y) => {
  let sumA = 0;

  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x + 1][y].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  return sumA;
};

let laplaceB = (x, y) => {
  let sumB = 0;

  sumB += grid[x][y].b * -1;
  sumB += grid[x - 1][y].b * 0.2;
  sumB += grid[x + 1][y].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  return sumB;
};

let swap = () => {
  let temp = grid;
  grid = next;
  next = temp;
};
