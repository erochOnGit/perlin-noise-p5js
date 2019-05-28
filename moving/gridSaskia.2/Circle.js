class Circle {
  constructor(x, y, size, color) {
    this.position = createVector(x, y);
    this.size = size || 4;
    this.color = color || [255, 255, 255];
  }
  draw() {
    noFill();
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.size * 10, this.size * 10);
  }
}
