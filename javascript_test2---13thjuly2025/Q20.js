function groupByType(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var type = arr[i].type;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(arr[i].name);
  }
  return result;
}
console.log(groupByType([
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' }
]));
console.log(groupByType([
{type:'a',name:'x'},{type:'b',name:'z'}
]));
