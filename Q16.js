function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i].id] = arr[i].name;
  }
  return obj;
}
console.log(arrayToObject([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]));
console.log(arrayToObject([{ id: 3, name: 'X' }, { id: 4, name: 'Y' }]));