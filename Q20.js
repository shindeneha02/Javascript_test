function longestWord(arr) {
  var longest='';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestWord(['hi', 'hello', 'goodbye']));
console.log(longestWord(['short', 'longer', 'lengthiest']));