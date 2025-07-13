function fibonacci(n) {
  var a = 0, b = 1, temp;
  if (n === 0) return 0;
  for (var i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(fibonacci(5)); 
console.log(fibonacci(6)); 
