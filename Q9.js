function last3Items(arr) {
  var result = [];
  for (var i = arr.length - 3; i < arr.length; i++) {
    if (i >= 0) result.push(arr[i]);
  }
  return result;
}
input1=console.log(last3Items([1, 2, 3, 4, 5]));
console.log(input1);
input1=console.log(last3Items([10,20,30,40]));
console.log(input1)