let speed=0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
}

function draw() {
  loadPixels();
  
  let xoffset = 0.0;

  for (let x = 0; x < width; x++) {
    let yoffset = 0.0;

    for (let y = 0; y < height; y++) {
      const bright = map(noise(xoffset, yoffset, speed), 0, 1, 0, 255);
      const hu = map(noise(xoffset, yoffset, speed), 0, 1, 0, 360);
      const col = color(hu, 230, 250, bright);
      set(x, y, col);

      yoffset += 0.0125;
    }
    xoffset += 0.01;
    
  }
  speed += 0.02;
  updatePixels();

}


