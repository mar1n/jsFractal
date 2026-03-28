var stage = 5;
var triangles = []
function recursion(value, ) {
    console.log('value', value)
  if (value === stage) {
    return;
  }
  value++;
  return recursion(value);
}

recursion(0)
