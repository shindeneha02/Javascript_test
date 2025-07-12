function firstGreaterThan50(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 50) return arr[i];
  }
  return null;
}
input1=console.log(firstGreaterThan50([10, 25, 60, 40]));
console.log(input1);

input2=console.log(firstGreaterThan50([45,52,19]));
console.log(input2); 