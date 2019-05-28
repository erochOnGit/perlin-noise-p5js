import p5 from "p5";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const sketch = p5 => {
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.background(44, 44, 44);
  };

  p5.draw = () => {
    p5.stroke(10);
    p5.strokeWeight(10);
    p5.point(20, 20);
  };
};

const P5 = new p5(sketch);
