class Dot {
  constructor(x, y, size, color) {
    this.position = createVector(x, y);
    this.size = size || 4;
    this.color = color || [255, 255, 255];
  }
  draw() {
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(this.size);
    point(this.position.x, this.position.y);
  }
}
