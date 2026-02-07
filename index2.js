function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  recursion(1);
}

function xcs() {
  let side5 = 100;

  let ffx1 = 100 + side5 / 2;
  let ffy1 = 300 - (side5 * sqrt(3)) / 2;

  let ffx2 = 100 + ffx1;
  let ffy2 = 300 - (side5 * sqrt(3)) / 2;

  let ffx3 = 100 + side5;
  let ffy3 = 300;

  push();
  fill("orange");
  triangle(ffx1, ffy1, ffx2, ffy2, ffx3, ffy3);
  pop();
}

function recursion(stage) {
  let points = [{}];
  if (stage === 0) {
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
    pop();
  }
  if (stage === 1) {
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
    pop();

    // let side2 = side / 2;

    // let sx1 = 100;
    // let sy1 = 300;

    // let sx2 = sx1 + side2;
    // let sy2 = sy1;

    // let sx3 = sx1 + side2 / 2;
    // let sy3 = sy1 - (side2 * sqrt(3)) / 2;
    // push();
    // fill("red");
    // triangle(sx1, sy1, sx2, sy2, sx3, sy3);
    // pop();

    // let side3 = side / 2;

    // let tx1 = 100 + side3;
    // let ty1 = 300;

    // let tx2 = tx1 + side3;
    // let ty2 = ty1;

    // let tx3 = tx1 + side3 / 2;
    // let ty3 = ty1 - (side3 * sqrt(3)) / 2;

    // push();
    // fill("green");
    // triangle(tx1, ty1, tx2, ty2, tx3, ty3);
    // pop();

    // let side4 = side / 2;

    // let fx1 = 100 + side4 / 2;
    // let fy1 = 300 - (side4 * sqrt(3)) / 2;

    // let fx2 = 100 + fx1;
    // let fy2 = 300 - (side4 * sqrt(3)) / 2;

    // let fx3 = 100 + side / 2;
    // let fy3 = 300 - (side * sqrt(3)) / 2;

    // push();
    // fill("blue");
    // triangle(fx1, fy1, fx2, fy2, fx3, fy3);
    // pop();

    let side5 = side / 2;

    let ffx1 = 100 + side5 / 2;
    let ffy1 = 300 - (side5 * sqrt(3)) / 2;

    let ffx2 = ffx1 + side5;
    let ffy2 = ffy1

    let ffx3 = 100 + side5;
    let ffy3 = 300;

    push();
    fill("pink");
    triangle(ffx1, ffy1, ffx2, ffy2, ffx3, ffy3);
    pop();

    let stage2 = side / 4

    let sx1 = 100 + 3 * stage2 / 2;
    let sy1 = 300 - 3 * (stage2 * sqrt(3)) / 2;

    let sx2 = sx1 + stage2
    let sy2 = sy1

    let sx3 = 100 + side / 2;
    let sy3 = 300 - ((side * sqrt(3)) / 2) / 2;

    push();
    fill("green");
    triangle(sx1, sy1, sx2, sy2, sx3, sy3);
    pop();

    let stage3 = side / 4

    let ssx1 = 100 + stage2 / 2;
    let ssy1 = 300 - (stage2 * sqrt(3)) / 2;

    let ssx2 = ssx1 + stage2
    let ssy2 = ssy1 

    let ssx3 = 100 + side5 / 2;
    let ssy3 = 300 - (side5 * sqrt(3)) / 2;

    push();
    fill("green");
    triangle(ssx1, ssy1, ssx2, ssy2, ssx3, ssy3);
    pop();
    //xcs();
  } else {
  }
}
