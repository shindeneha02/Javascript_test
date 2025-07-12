function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
input1=console.log(isLeapYear(2024));
console.log(input1)

input2=console.log(isLeapYear(2023)); 
console.log(input2)