function printPattern(rows) {
  var pattern = '';
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}
printPattern(3);
printPattern(2);

