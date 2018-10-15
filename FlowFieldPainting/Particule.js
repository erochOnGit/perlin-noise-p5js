function Particule() {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(random(width), random(height));
  this.acceleration = createVector(0, 0);
  this.maxSpeed = 2;

  this.prevPosition = this.position.copy();

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.show = function(tmp) {
    stroke(
      noise(tmp) * random(255),
      noise(tmp) * random(250),
      noise(tmp) * random(255),
      2
    );
    strokeWeight(300);
    point(this.position.x, this.position.y);

    // point(this.position.x, this.position.y);
    this.updatePrev();
  };

  this.updatePrev = function() {
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
  };

  this.edges = function() {
    if (this.position.x > width) {
      this.position.x = 0;
      this.updatePrev();
    }
    if (this.position.x < 0) {
      this.position.x = width;
      this.updatePrev();
    }
    if (this.position.y > height) {
      this.position.y = 0;
      this.updatePrev();
    }
    if (this.position.y < 0) {
      this.position.y = height;
      this.updatePrev();
    }
  };

  this.follow = function(vectors) {
    let x = floor(this.position.x / scale);
    let y = floor(this.position.y / scale);
    let index = x + y * comlumns;
    let force = vectors[index];
    this.applyForce(force);
  };
}
