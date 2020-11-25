// Implement a basic calculator to evaluate a simple expression string.
// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:
// Input: "3+2*2"
// Output: 7

// Example 2:
// Input: " 3/2 "
// Output: 1

// Example 3:
// Input: " 3+5 / 2 "
// Output: 5

// I: string
// O: evaluated number
// C: int division truncate toward zero
// E: none

var calculate = function(s) {
  // need to trim whitespaces
  // PEMDAS <- only +,-, *, and /
  s = s.replace(/\s+/g, ''); // removes whitespace
  // s = s.split(/[^0-9]/); // splits by non numbers
  //debugger;
  var currentNum = '';
  var operation = '+';
  var prevNum = 0;
  var total = 0;
  for (var i = 0; i < s.length; i++) {
    var currentChar = s[i];
    if (!isNaN(currentChar)) {
      currentNum += currentChar;
    }
    if (isNaN(currentChar) || i === s.length - 1) {
      currentNum = Number(currentNum);

      if (operation === '+' || operation === '-') {
        total += prevNum;
        prevNum = (operation === '+') ? currentNum : -1 * currentNum;
      }
      if (operation === '*') {
        prevNum = prevNum * currentNum;
      }
      if (operation === '/') {
        if (prevNum < 0) {
          prevNum = Math.ceil(prevNum / currentNum);
        } else {
          prevNum = Math.floor(prevNum / currentNum);
        }
      }

      currentNum = '';
      operation = currentChar;
    }
  }
  total += prevNum;
  return total;
};

// console.log(calculate("3+2*2"))
// console.log(calculate(" 3/2 "))
// console.log(calculate("14-3/2"))
// debugger;