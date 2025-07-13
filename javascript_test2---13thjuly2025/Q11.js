function countFrequencies(arr) {
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (count[el]) {
      count[el]++;
    } else {
      count[el] = 1;
    }
  }
  return count;
}
console.log(countFrequencies([1, 2, 2, 3])); 
console.log(countFrequencies([4,4,4]));
 
