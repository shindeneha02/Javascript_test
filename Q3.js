function allPositive(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return false;
  }
  return true;
}
input1=console.log(allPositive([1, 2, 3, 4])); 
console.log(input1); 

input2=console.log(allPositive([-1,0,5])); 
console.log(input2); 
