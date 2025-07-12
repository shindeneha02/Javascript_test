function capitalizeWords(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var newWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(newWord);
  }
  return result;
}
console.log(capitalizeWords(['hello', 'world']));
console.log(capitalizeWords(['code', 'Test']))