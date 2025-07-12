function filterOddNumbers(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) result.push(arr[i]);
  }
  return result;
}
input1=console.log(filterOddNumbers([1, 2, 3, 4, 5])); 
console.log(input1);
 
input2=console.log(filterOddNumbers([10,15,20,25])); 
console.log(input2);