function countTypes(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var type = typeof arr[i];
    if (result[type]) result[type]++;
    else result[type] = 1;
  }
  return result;
}
console.log(countTypes([1, 'hi', true, {}]));
console.log(countTypes([ 'x','y' ,5]));
