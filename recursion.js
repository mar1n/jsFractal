var stage = 5;
var triangles = [{side: 0}]
function recursion(value, ) {
    console.log('value', value)
    console.log('triangle side test', triangles[value])
  if (value === stage) {
    return;
  }
  
  triangles.push({side: triangles[value].side + 1})
  value++;
  return recursion(value);
}

recursion(0)
