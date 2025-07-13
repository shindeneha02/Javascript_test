function invertObject(obj) {
  var result = {};
  for (var key in obj) {
    result[obj[key]] = key;
  }
  return result;
}
console.log(invertObject({ a: 1, b: 2 })); 
console.log(invertObject({ x: 'y', z: 'w' })); 
