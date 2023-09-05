   let bird;
let bullets = [];
let isGameOver = false;

function setup() {
  createCanvas(400, 400 );
  bird = new Bird();
   
}

function draw() {
  background(220);
  
  if(!isGameOver)
  bird.update();
  bird.display();
  fill(255, 0, 0);
       textAlign( CENTER, CENTER);
        text("Dodge The  BB Bullet Loser gets frozen", width /2, height/2);
       
  if(frameCount % 60 === 0) {
    bullets.push(new Bullet());
    
  }
  
  // Update and display bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();
    
    // Check for collision with bird ? 
     if (bullets[i].hits( bird)) {
      isGameOver = true;
     }
  }
    
  // Create new bullets
  if (frameCount % 60 === 0) {
    bullets.push(new Bullet());
  }
}

function keyPressed() {
  if (key === ' ') {
    bird.jump();
   }
 
}  

class Bird {
  constructor() {
    this.y = height / 6;
    this.velocity = 0;
    this.gravity = 0.6;
  }
  
  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
  }
  
  display() {
    fill(800, 300, 0);
    ellipse(50, this.y, 49, 49); 
    fill(0, 0, 0);
    ellipse(58, this.y, 10, 10);
      arc( 77, this.y, 15, 20, 89, 38);
  }
   
  jump() {
    this.velocity = -12;
  }
}

class Bullet {
  constructor() {
    this.x = width;
    this.y = random(height);
    this.speed = 5;
    this.size = 16;
  }
  
  update() {
    this.x -= this.speed;
  }
  
  display() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.size, this.size);
    
  }
  
  hits(bird) {
    let d = dist(this.x, this.y, 50, bird.y);
    
    return d < this.size / 2 + 16;
  
  }
}
 