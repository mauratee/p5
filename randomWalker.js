
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(220);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = windowWidth/2;
    this.y = windowHeight/2;
  }

  show() {
    stroke('purple');
    point(this.x, this.y);
    strokeWeight(5)
  }

  step() {
    let r = random(1);

    let xstep = randomGaussian();
    let ystep = randomGaussian();

    this.x += xstep;
    this.y += ystep;
    
  }

}
