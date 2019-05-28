function Particule(type) {
  this.type = type;
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0.5, 0.5);
  this.acceleration = createVector(0, 0);
  this.maxSpeed = 4;
  this.size = random(30);
  this.color = [];
  let colors = [
    [151, 98, 255],
    [180, 102, 219],
    [204, 100, 178],
    [229, 101, 139],
    [255, 105, 105]
  ];
  this.color = colors[floor(random(5))];
  this.bouncing = random(5);

  this.update = function(time) {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.size = 150;
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.show = function() {
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(this.size);
    point(this.position.x, this.position.y);
  };

  this.edges = function() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  };

  this.follow = function(vectors) {
    let x = floor(this.position.x / scale);
    let y = floor(this.position.y / scale);
    let index = x + y * comlumns;
    let force = vectors[index];
    this.applyForce(force);
  };
}
