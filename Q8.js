function totalCharacters(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  return sum;
}
input1=console.log(totalCharacters(['hi', 'world']));
console.log(input1)

input2=console.log(totalCharacters(['a', 'ab','abc']));
console.log(input2)
