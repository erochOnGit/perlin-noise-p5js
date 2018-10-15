function Particule() {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(random(width) * 10, random(width) * 10);
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

  this.show = function() {
    let rdmR = noise(this.position.x) * 110;
    let rdmG = noise(this.position.x) * 200;
    let rdmB = noise(this.position.x) * 200;
    let rdmA = noise(this.position.x) * 3;
    let rdmS = noise(this.position.y) * 500;
    colorMode(HSB, 150);
    stroke(rdmR, rdmG, rdmB, rdmA);
    strokeWeight(rdmS);
    point(this.position.x, this.position.y);
    // this.updatePrev();
  };
  this.showPhyllo = function(posx, posy, color, opacity, n, angle, c) {
    let a = n * Math.PI * (3 - Math.sqrt(angle));
    let r = c * Math.sqrt(n);

    let x = r * Math.cos(a) + posx;
    let y = r * Math.sin(a) + posy;

    let rdmR = noise(this.position.x) * color;
    let rdmG = noise(this.position.x) * 200;
    let rdmB = noise(this.position.x) * 200;
    let rdmA = noise(this.position.x) * opacity;
    let rdmS = noise(this.position.y) * 50;

    colorMode(HSB, 150);
    stroke(rdmR, rdmG, rdmB, rdmA);
    strokeWeight(rdmS);
    point(x, y);
    // this.updatePrev();
  };
  this.showBig = function(color, opacity, taille) {
    let rdmR = noise(this.position.x) * color;
    let rdmG = noise(this.position.x) * 200;
    let rdmB = noise(this.position.x) * 200;
    let rdmA = noise(this.position.x) * opacity;
    let rdmS = noise(this.position.y) * taille;
    colorMode(HSB, 150);
    stroke(rdmR, rdmG, rdmB, rdmA);
    strokeWeight(rdmS);
    point(this.position.x, this.position.y);
    // this.updatePrev();
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
