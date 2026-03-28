var stage = 5;
var triangles = [{side: 0}]
function recursion(value, ) {
    console.log('value', value)
    console.log('triangle side test', triangles[value])
    let side = triangles[value].side
  if (value === stage) {
    return;
  }
  value++;
  triangles.push({side: side + 1})
  return recursion(value);
}

recursion(0)
