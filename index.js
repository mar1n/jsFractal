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

    let ffx2 = 100 + ffx1;
    let ffy2 = 300 - (side5 * sqrt(3)) / 2;

    let ffx3 = 100 + side5;
    let ffy3 = 300;

    push();
    fill("orange");
    triangle(ffx1, ffy1, ffx2, ffy2, ffx3, ffy3);
    pop();

    let side6 = 100 / 2 ;

    let sx1 = 100 + side6 / 2;
    let sy1 = 300 - (side6 * sqrt(3)) / 2;

    let sx2 = 100 / 2 + sx1;
    let sy2 = 300 - (side6 * sqrt(3)) / 2;

    let sx3 = 100 + side6;
    let sy3 = 300;

    push();
    fill("orange");
    triangle(sx1, sy1, sx2, sy2, sx3, sy3);
    pop();

    let sidet = 100 / 2 ;

    let ttx1 = 125 + sidet;
    let tty1 = 215 - (sidet * sqrt(3)) / 2;

    let ttx2 = ttx1 + sidet
    let tty2 = tty1

    let ttx3 = 100 + side / 2
    let tty3 = 300 - (side * sqrt(3)) / 2;

    push();
    fill("green");
    triangle(ttx1, tty1, ttx2, tty2, ttx3, tty3);
    pop();

    let side7 = 100 / 2 ;

    let ssx1 = 200 + side7 / 2;
    let ssy1 = 300 - (side7 * sqrt(3)) / 2;

    let ssx2 = 100 / 2 + ssx1;
    let ssy2 = 300 - (side7 * sqrt(3)) / 2;

    let ssx3 = 200 + side7;
    let ssy3 = 300;

    push();
    fill("orange");
    triangle(ssx1, ssy1, ssx2, ssy2, ssx3, ssy3);
    pop();

    let side8 = 50 / 2 ;

    let ex1 = 100 + side8 / 2;
    let ey1 = 300 - (side8 * sqrt(3)) / 2;

    let ex2 = 100 / 4 + ex1;
    let ey2 = 300 - (side8 * sqrt(3)) / 2;

    let ex3 = 100 + side8;
    let ey3 = 300;

    push();
    fill("red");
    triangle(ex1, ey1, ex2, ey2, ex3, ey3);
    pop();

    let side9 = 50 / 2 ;

    let tx1 = 150 + side9 / 2;
    let ty1 = 300 - (side9 * sqrt(3)) / 2;

    let tx2 = 100 / 4 + tx1;
    let ty2 = 300 - (side9 * sqrt(3)) / 2;

    let tx3 = 150 + side9;
    let ty3 = 300;

    push();
    fill("red");
    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
    pop();

    let side10 = 25 / 2 ;

    let eex1 = 100 + side10 / 2;
    let eey1 = 300 - (side10 * sqrt(3)) / 2;

    let eex2 = 100 / 8 + eex1;
    let eey2 = 300 - (side10 * sqrt(3)) / 2;

    let eex3 = 100 + side10;
    let eey3 = 300;

    push();
    fill("silver");
    triangle(eex1, eey1, eex2, eey2, eex3, eey3);
    pop();
    //xcs();
  } else {
  }
}
