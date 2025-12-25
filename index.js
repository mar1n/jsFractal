function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let side = 200;

  // Bottom-left point
  let x1 = 100;
  let y1 = 300;

  // Bottom-right point
  let x2 = x1 + side;
  let y2 = y1;

  // Top point (centered)
  let x3 = x1 + side / 2;
  let y3 = y1 - (side * sqrt(3)) / 2;

  triangle(x1, y1, x2, y2, x3, y3);
}
