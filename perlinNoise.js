

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadPixels();
  let xoffset = 0.0;

  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 255;
  }

  for (let x = 0; x < windowWidth; x++) {
    let yoffset = 0.0;

    for (let y = 0; y < windowHeight; y++) {
      const bright = map(noise(xoffset, yoffset), 0, 1, 100, 175)
      set(x, y, floor(bright));
      yoffset += 0.01
    }
    xoffset += 0.01
    
  }
  updatePixels();
}

function draw() {}


