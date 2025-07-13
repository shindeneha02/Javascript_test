function firstNonRepeating(str) {
  for (var i = 0; i < str.length; i++) {
    var count = 0;
    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeating("aabbcdd")); 
console.log(firstNonRepeating("xxyz")); 
