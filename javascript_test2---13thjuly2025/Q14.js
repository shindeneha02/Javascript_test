function highestValueKey(obj) {
  var highest = -Infinity;
  var highestKey = '';
  for (var key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
      highestKey = key;
    }
  }
  return highestKey;
}
console.log(highestValueKey({ a: 1, b: 5, c: 3 })); // 'b'
console.log(highestValueKey({x:100,y:99 }));