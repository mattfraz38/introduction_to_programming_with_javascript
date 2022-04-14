// What values do the following expressions evaluate to?

false || (true && false);     // fasle
true || (1 + 2);              // true
(1 + 2) || true;              // 3
true && (1 + 2);              // 3
false && (1 + 2);             // false
(1 + 2) && true;              // true
(32 * 4) >= 129;              // false
false !== !true;              // false
true === 4;                   // false
false === (847 === '847');    // true
false === (847 == '847');     // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // true

// Write a function, evenOrOdd, that determines whether its argument // is an even number. If it is, the function should log 'even' to 
// the console; otherwise, it should log 'odd'. For now, assume that // the argument is always an integer.

function evenOrOdd(num) {
  let result = num % 2 === 0 ? 'even' : 'odd';
  return result;
}

console.log(evenOrOdd(5));  // odd
console.log(evenOrOdd(6));  // even

// Let's improve our previous implementation of evenOrOdd. Add a 
// validation check to ensure that the argument is an integer. If it // isn't, the function should issue an error message and return.

function evenOrOdd2(num) {
  if (!Number.isInteger(num)) {
    return 'Error: Not an integer';
  }

  let result = num % 2 === 0 ? 'even' : 'odd';
  return result;
}

console.log(evenOrOdd2('5'));  // Error: Not an integer
console.log(evenOrOdd2(5));    // odd

// What does the following code log to the console, and why?
// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }

// barCodeScanner('113');

// it logs:
// Product1
// Product2
// Product3
// Product not found!
// this is because not break statements were used
// therefore the switch statement falls through all cases

// Refactor this statement to use an if statement instead.
// return foo() ? 'bar' : qux();

// if (foo()) {
//  return 'bar';
// } else {
//  return qux();
// }

// What does this code output to the console?
// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

// 'Not Empty', this is becuase we are not actually checking
// if the array is empty, instead we are checking the
// truthyness value

// Write a function that takes a string as an argument and returns 
// an all-caps version of the string when the string is longer than 
// 10 characters. Otherwise, it should return the original string. 
// Example: change 'hello world' to 'HELLO WORLD', but don't change 
// 'goodbye'.

function capsGreaterThanTen(text) {
  if (text.length >= 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

// Write a function that logs whether a number is between 0 and 50 
// (inclusive), between 51 and 100 (inclusive), greater than 100, or
// less than 0.

function numberRange(num) {
  switch (true) {
    case (num >= 0 && num <= 50):
      return `${num} is between 0 and 50`;
      break;
    case (num > 51 && num <= 100):
      return `${num} is between 51 and 100`;
      break;
    case (num > 100):
      return `${num} is greater than 100`;
      break;
    default:
      return `${num} is less than 0`;
      break;
  }
}

console.log(numberRange(25));    // 25 is between 0 and 50
console.log(numberRange(75));    // 75 is between 51 and 100
console.log(numberRange(125));   // 125 is greater than 100
console.log(numberRange(-25));   // -25 is less than 0
