

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadPixels();
  let xoffset = 0.0;

  for (let x = 0; x < windowWidth; x++) {
    let yoffset = 0.0;

    for (let y = 0; y < windowHeight; y++) {
      const bright = map(noise(xoffset, yoffset), 0, 1, 0, 255)
      let index = (x + y * width) * 4;

      pixels[index] = 230;
      pixels[index + 1] = 230;
      pixels[index + 2] = 250;
      pixels[index + 3] = bright;

      yoffset += 0.0125
    }
    xoffset += 0.01
    
  }
  updatePixels();
}

function draw() {}


