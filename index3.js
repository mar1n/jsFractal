function setup() {
  createCanvas(400, 400);
}

var exampleOfCounter = 0;
var points = [
  {
    side: 200,
    x1: 0,
    y1: 300,
    x2: 0 + 200,
    y2: 300,
    x3: 0 + 200 / 2,
    y3: 300 - (200 * Math.sqrt(3)) / 2,
  },
];
var triangles = []
function draw() {
  background(220);
  // for(let x = 0; x <=2; x++) {
  //   console.log('x', x)
  // }
  recursion(exampleOfCounter, points);
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



function recursion(stage, points) {
  console.log('stage', stage)
  console.log('points', points)
  console.log('triangles', triangles)
  // let side = 200;

  // // Bottom-left point
  // let x1 = 0;
  // let y1 = 300;
  // if (stage === 0) {
  //   let side = 200;

  //   // Bottom-left point
  //   let x1 = 100;
  //   let y1 = 300;

  //   // Bottom-right point
  //   let x2 = x1 + side;
  //   let y2 = y1;

  //   // Top point (centered)
  //   let x3 = x1 + side / 2;
  //   let y3 = y1 - (side * sqrt(3)) / 2;

  //   push();
  //   fill(255);
  //   triangle(x1, y1, x2, y2, x3, y3);
  //   pop();
  //   exampleOfCounter++
  // }
  
    // let side = 200;

    // // Bottom-left point
    // let x1 = points[0].x1;
    // let y1 = points[0].y1;

    // // Bottom-right point
    // let x2 = x1 + side;
    // let y2 = y1;

    // // Top point (centered)
    // let x3 = x1 + side / 2;
    // let y3 = y1 - (side * sqrt(3)) / 2;
    for(angle of  points) {
console.log('angle', angle)
      push();
      fill(255);
      triangle(
        angle.x1,
        angle.y1,
        angle.x2,
        angle.y2,
        angle.x3,
        angle.y3,
      );
      pop();
    }

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

    let side5 = points[0].side / 2;

    let ffx1 = points[0].x1 + side5 / 2;
    let ffy1 = points[0].y1 - (side5 * sqrt(3)) / 2;

    let ffx2 = ffx1 + side5;
    let ffy2 = ffy1;

    let ffx3 = points[0].x3;
    let ffy3 = points[0].y2;

    // console.log(ffx3)
    // console.log(ffy3)
points.push({ x1: ffx1, y1: ffy1, x2: ffx2, y2: ffy2, x3: ffx3, y3: ffy3 })

triangles.push({ x1: points[0].x1, y1: points[0].y1, x2:ffx2 , y2: ffy2, x3: ffx3, y3: ffy3 })
triangles.push({ x1: ffx1, y1: ffy1, x2: ffx2, y2: ffy2, x3: points[0].x3, y3: points[0].y3})
triangles.push({ x1:ffx3, y1: ffy3, x2: points[0].x2, y2: points[0].y2, x3: ffx2, y3: ffy2})
// push();
    // fill("green");
    // triangle(ffx1, ffy1, ffx2, ffy2, ffx3, ffy3);
    // pop();

    // let A = { x: ffx1, y: ffy1 }; // left
    // let B = { x: ffx2, y: ffy2 }; // right
    // let C = { x: points[0].x3, y: points[0].y3 }; // top

    // let side6 = side5 / 2;

    // let fffx1 = A.x + side6 / 2;
    // let fffy1 = A.y - (side6 * sqrt(3)) / 2;

    // let fffx2 = fffx1 + side6;
    // let fffy2 = fffy1;

    // let fffx3 = C.x;
    // let fffy3 = B.y;

    // push();
    // fill("orange");

    
    // triangle(fffx1, fffy1, fffx2, fffy2, fffx3, fffy3);
    // pop();
    // let D = { x: points[0].x1, y: points[0].y1 }; // left
    // let E = { x: ffx3, y: ffy3 }; // right
    // let F = { x: ffx1, y: ffy1 }; // top

    // let fffLx1 = D.x  + side6 / 2;
    // let fffLy1 = D.y - (side6 * sqrt(3)) / 2;

    // let fffLx2 = fffLx1 + side6;
    // let fffLy2 = fffLy1;

    // let fffLx3 = F.x;
    // let fffLy3 = E.y;

    // push();
    // fill("orange");
    // triangle(fffLx1, fffLy1, fffLx2, fffLy2, fffLx3, fffLy3);
    // pop();

    // let G = { x: ffx3, y: ffy3 };
    // let H = { x: points[0].x2, y: points[0].y2 };
    // let I = { x: ffx2, y: ffy2 };

    // let fffffLx1 = G.x + side6 / 2;
    // let fffffLy1 = G.y - (side6 * sqrt(3)) / 2;

    // let fffffLx2 = fffffLx1 + side6;
    // let fffffLy2 = fffffLy1;

    // let fffffLx3 = I.x;
    // let fffffLy3 = H.y;

    // push();
    // fill("orange");
    // triangle(fffffLx1, fffffLy1, fffffLx2, fffffLy2, fffffLx3, fffffLy3);
    // pop();
    
    // let AA = { x: fffx1, y: fffy1 }; // left
    // let BB = { x: fffx2, y: fffy2 }; // right
    // let CC = { x: points[0].x3, y: points[0].y3 }; // top

    // let side66 = side6 / 2;

    // let ffffx1 = AA.x + side66 / 2
    // let ffffy1 = AA.y - (side66 * sqrt(3)) / 2;

    // let ffffx2 = ffffx1 + side66
    // let ffffy2 = ffffy1

    // let ffffx3 = CC.x;
    // let ffffy3 = BB.y;

    // push();
    // fill("red");
    // triangle(ffffx1, ffffy1, ffffx2, ffffy2, ffffx3, ffffy3);
    // pop();
    // let AAA = { x: ffx1, y: ffy1 }; // left
    // let BBB = { x: fffx3, y: fffy3 }; // right
    // let CCC = { x: fffx1, y: fffy1 }; // top

    // // let side66 = side6 / 2;

    // let fffffx1 = AAA.x + side66 / 2
    // let fffffy1 = AAA.y - (side66 * sqrt(3)) / 2;

    // let fffffx2 = fffffx1 + side66
    // let fffffy2 = fffffy1

    // let fffffx3 = CCC.x;
    // let fffffy3 = BBB.y;

    // push();
    // fill("red");
    // triangle(fffffx1, fffffy1, fffffx2, fffffy2, fffffx3, fffffy3);
    // pop();


    //  let D = {x: points[0].x1, y: points[0].y1} // left
    // let E = {x: ffx1, y: ffy1}  // right
    // let F =  {x: ffx3, y: ffy3}// top

    // let fffLx1 = E.x / 2
    // let fffLy1 = D.y - (side6 * sqrt(3)) / 2;

    // let fffLx2 = fffLx1 + side6;
    // let fffLy2 = fffLy1

    // let fffLx3 = E.x
    // let fffLy3 = F.y

    // push();
    // fill("pink");
    // triangle(fffLx1, fffLy1, fffLx2, fffLy2, fffLx3, fffLy3);
    // pop();

    // let stage3 = side / 4

    // let ssx1 = 100 + stage2 / 2;
    // let ssy1 = 300 - (stage2 * sqrt(3)) / 2;

    // let ssx2 = ssx1 + stage2
    // let ssy2 = ssy1

    // let ssx3 = 100 + side5 / 2;
    // let ssy3 = 300 - (side5 * sqrt(3)) / 2;

    // push();
    // fill("green");
    // triangle(ssx1, ssy1, ssx2, ssy2, ssx3, ssy3);
    // pop();
    //xcs();
//     if(stage === 2) {
//   return undefined
// }
if(stage === 1 ) {
  console.log('stop')
  return undefined
}
let p = points
    exampleOfCounter++
    noLoop();
    //stage += 1
    return recursion(exampleOfCounter, p)
  
  
}
