function Particule() {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.maxSpeed = 4;
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.show = function(x, y, zoff, yoff) {
    push();
    let chance = random(5);
    let nochance = random(5);
    strokeWeight(3);
    if (nochance > 4) {
      if (sin(zoff) > 0) {
        if (chance > 4) {
          stroke(0, 0, 0, 10);
        } else {
          stroke(255, 25, 25, 10);
        }
      } else {
        stroke(25, 25, 255, 10);
      }
      // console.log(this.position.x > 1000 && this.position.x < 1200);
      // if (cos(zoff / 10) < -0.8) {
      //   stroke(255, 255, 255, 30);
      // }
      let moyx = (x + this.position.x) / 2;
      let moyy = (y + this.position.y) / 2;
      console.log(moyx, moyy);
      if (moyx > 1450 && moyx < 1550 && moyy > 1450 && moyy < 1550) {
        stroke(255, 255, 255, 255);
        strokeWeight(13);
      }
      // stroke(color * 100, noise(x, y) * 200, color * 100, 10);
      // strokeWeight(3);
      line(x, y, this.position.x, this.position.y);
    }
    pop();
  };

  this.edges = function() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  };

  this.follow = function(vectors) {
    let x = floor(this.position.x / widthMultp);
    let y = floor(this.position.y / heightMultp);
    let index = x + y * columns;
    // console.log(vectors);
    // console.log(index, vectors[index]);
    let force = vectors[index];
    this.applyForce(force.mult(0.05));
  };
}
