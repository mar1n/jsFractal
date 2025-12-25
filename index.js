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

  push();
  fill(255);
  triangle(x1, y1, x2, y2, x3, y3);
  pop()

  let side2 = side / 2;

  let sx1 = 100;
  let sy1 = 300;

  let sx2 = sx1 + side2;
  let sy2 = sy1;

  let sx3 = sx1 + side2 / 2;
  let sy3 = sy1 - (side2 * sqrt(3)) / 2;

  push()
  fill("red");
  triangle(sx1, sy1, sx2, sy2, sx3, sy3);
  pop()

  let side3 = side / 2;

  let tx1 = 200;
  let ty1 = 300;

  let tx2 = 100 + 200;
  let ty2 = ty1;

  let tx3 = 200 + side3 / 2;
  let ty3 = 300 - (side3 * sqrt(3)) / 2;

  push()
  fill("red");
  triangle(tx1, ty1, tx2, ty2, tx3, ty3);
  pop()

  let side4 = side / 2;

  let fx1 = 150;
  let fy1 = 212;

  let fx2 = 100 + 150;
  let fy2 = fy1;

  let fx3 = 150 + side4 / 2;
  let fy3 = 210 - (side4 * sqrt(3)) / 2;

  push()
  fill("red");
  triangle(fx1, fy1, fx2, fy2, fx3, fy3);
  pop()

//   let side4 = side / 2;

//   let fx1 = 150;
//   let fy1 = 212;

//   let fx2 = 100 + 150;
//   let fy2 = fy1;

//   let fx3 = 150 + side4 / 2;
//   let fy3 = 200 - (side4 * sqrt(3)) / 2;

//   push()
//   fill("red");
//   triangle(fx1, fy1, fx2, fy2, fx3, fy3);
//   pop()
}
