function divisibleBy5(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) return true;
  }
  return false;
}
console.log(divisibleBy5([3, 6, 10, 14]));
console.log(divisibleBy5([2,4,6]));