function gradeDistribution(marks) {
  var result = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) result.A++;
    else if (marks[i] >= 80) result.B++;
    else if (marks[i] >= 70) result.C++;
    else if (marks[i] >= 60) result.D++;
    else result.F++;
  }
  return result;
}
input1=console.log(gradeDistribution([95, 82, 67, 50]));
console.log(input1); 

input2=console.log(gradeDistribution([91,59,76,88]))
console.log(input2); 