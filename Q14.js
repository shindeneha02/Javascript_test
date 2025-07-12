function wordFrequencies(arr) {
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (count[word]) count[word]++;
    else count[word] = 1;
  }
  return count;
}
console.log(wordFrequencies(['apple', 'banana', 'apple']));
console.log(wordFrequencies(['x','x','z']));