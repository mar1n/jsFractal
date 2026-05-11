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
var triangles = [];
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
  console.log("stage", stage);
  console.log("points", points);
  console.log("triangles", triangles);

  for (angle of points) {
    console.log("angle", angle);
    push();
    fill(255);
    triangle(angle.x1, angle.y1, angle.x2, angle.y2, angle.x3, angle.y3);
    pop();
  }
const leng = points.length
  for(let i = 0;  i < leng; i++) {
console.log('tri,', points[i])
     let side5 = points[i].side / 2;
  
    let ffx1 = points[i].x1 + side5 / 2;
    let ffy1 = points[i].y1 - (side5 * sqrt(3)) / 2;
  
    let ffx2 = ffx1 + side5;
    let ffy2 = ffy1;
  
    let ffx3 = points[i].x3;
    let ffy3 = points[i].y2;
  
    points.push({side: side5, x1: ffx1, y1: ffy1, x2: ffx2, y2:ffy2, x3: ffx3, y3: ffy3});
  }
  function calculateTriangle() {}

  // triangles.push({ x1: points[0].x1, y1: points[0].y1, x2:ffx2 , y2: ffy2, x3: ffx3, y3: ffy3 })
  // triangles.push({ x1: ffx1, y1: ffy1, x2: ffx2, y2: ffy2, x3: points[0].x3, y3: points[0].y3})
  // triangles.push({ x1:ffx3, y1: ffy3, x2: points[0].x2, y2: points[0].y2, x3: ffx2, y3: ffy2})

  if (stage === 1) {
    console.log("stop");
    return undefined;
  }
  let p = points;
  exampleOfCounter++;
  noLoop();
  //stage += 1
  return recursion(exampleOfCounter, p);
}
