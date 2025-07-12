function doubleElements(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
input1=console.log(doubleElements([1, 2, 3])); 
console.log(input1);
input1=console.log(doubleElements([5,10])); 
console.log(input1);