function secondLargest(arr) {
  var largest = -Infinity, second = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 20, 8])); 
console.log(secondLargest([1,2,2,3])); 
