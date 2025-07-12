function flattenArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, 3], 4])); 



//not getting appropriate Output
