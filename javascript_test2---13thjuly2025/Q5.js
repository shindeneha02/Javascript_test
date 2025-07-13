function rotateArray(arr, k) {
  for (var i = 0; i < k; i++) {
    var last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([10, 20, 30],k=1));
