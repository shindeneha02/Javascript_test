function countEvenOdd(arr) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even: even, odd: odd };
}


var input1= countEvenOdd([2, 3, 4, 5]);
console.log(input1); 


var input2 = countEvenOdd([11, 14, 16, 17, 19]);
console.log(input2); 
