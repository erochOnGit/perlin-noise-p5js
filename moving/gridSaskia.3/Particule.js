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
      if (sin(zoff) > -0.2) {
        if (chance > 4) {
          stroke(0, 0, 0, 0);
        } else {
          stroke(6, 56, 250, 10);
        }
      } else {
        stroke(23, 253, 68, 10);
      }
      // console.log(this.position.x > 1000 && this.position.x < 1200);
      if (cos(zoff / 10) < -0.93) {
        stroke(255, 255, 255, 30);
      } else if (cos(zoff / 10) > 0.98) {
        stroke(240, 128, 115, 15);
      }
      // let moyx = (x + this.position.x) / 2;
      // let moyy = (y + this.position.y) / 2;
      // console.log(moyx, moyy);
      //le
      let slope = (y - this.position.y) / (x - this.position.x);
      let b = y - slope * x;
      let equationY = slope * 1500 + b;
      // console.log(equationY > 200 && equationY < 1700);
      let equationX = (1500 - b) / slope;
      if (
        (equationY > 1400 && equationY < 1600) ||
        (equationX > 1400 && equationX < 1600)
      ) {
      } else if (
        (equationY > 1200 && equationY < 1800) ||
        (equationX > 1200 && equationX < 1800)
      ) {
        chance = random(5);
        if (sin(zoff) > -0.2) {
          if (chance > 4) {
            stroke(0, 0, 0, 0);
          } else {
            stroke(255, 135, 248, 20);
          }
        } else {
          stroke(253, 212, 117, 20);
        }
        line(x, y, this.position.x, this.position.y);
      } else if (
        (equationY > 800 && equationY < 2200) ||
        (equationX > 800 && equationX < 2200)
      ) {
        //
        // strokeWeight(13);
        chance = random(5);
        if (sin(zoff) > -0.2) {
          if (chance > 4) {
            stroke(0, 0, 0, 0);
          } else {
            stroke(255, 150, 112, 20);
          }
        } else {
          stroke(193, 225, 220, 20);
        }
        line(x, y, this.position.x, this.position.y);
      } else {
        line(x, y, this.position.x, this.position.y);
      }

      // stroke(color * 100, noise(x, y) * 200, color * 100, 10);
      // strokeWeight(3);
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
