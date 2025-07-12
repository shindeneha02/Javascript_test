function groupByLength(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    if (result[len]) result[len].push(arr[i]);
    else result[len] = [arr[i]];
  }
  return result;
}
console.log(groupByLength(['hi', 'yes', 'no', 'maybe']));
console.log(groupByLength(['a','ab','abc']));