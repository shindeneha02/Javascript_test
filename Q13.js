function firstNegativeIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;
  }
  return -1;
}
console.log(firstNegativeIndex([1, 2, -3, 4])); 
console.log(firstNegativeIndex([5,7,8])); 