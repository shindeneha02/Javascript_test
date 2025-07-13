function mergeObjects(obj1, obj2) {
  var result = {};
  for (var key in obj1) {
    result[key] = obj1[key];
  }
  for (var key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({x:10}, {x:20, y:30}));  

