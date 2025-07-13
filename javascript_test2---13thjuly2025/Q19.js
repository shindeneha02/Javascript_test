function flattenArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3]], 4])); 
console.log(flattenArray([1], [2, 3])); // not getting appropriate output for second input.