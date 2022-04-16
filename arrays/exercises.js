// In the following code, what are the final length values for
// array1, array2, array3, array4, and array5?

// let array1 = [1, 2, undefined, 4];

// let array2 = [1];
// array2.length = 5;

// let array3 = [];
// array3[-1] = [1];

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3;

// let array5 = [];
// array5[100] = 3;

// array1 is 4
// array2 is 5
// array3 is 0
// array4 is 3
// array5 is 101

// Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// Let's make the problem a little harder. In this problem, we're
// again interested in even numbers, but this time the numbers are
// in nested arrays in a single outer array.

let myArr = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArr.forEach(arr => {
  arr.forEach(el => {
    if (el % 2 === 0) {
      console.log(el);
    }
  });
});

// Let's try another variation on the even-numbers theme.
// We'll return to the simpler one-dimensional array. In this
// problem, we want to use the map function to create a new array
//  that contains one element for each element in the original
// array. If the element is an even value, then the corresponding
// element in the new array should contain the string 'even';
// otherwise, the element in the new array should contain 'odd'.

let arr = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// Expected output:
// [
//   'odd', 'odd', 'even', 'odd',
//   'even', 'even', 'even', 'odd',
//   'odd', 'even', 'even',
// ]

const evensAndOdds = arr.map(el => {
  if (el % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

// Write a findIntegers function that takes an array argument and
// returns an array that contains only the integers from the input
// array. Use the filter method in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

const findIntegers = arr => {
  return arr.filter(el => Number.isInteger(el));
}

console.log(findIntegers(things));

// Use map and filter to first determine the lengths of all the
// elements in an array of string values, then discard the even
// values (keep the odd values).

let strs = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

const oddLengths = arr => {
  let lengths = arr.map(str => str.length);

  return lengths.filter(len => len % 2 !== 0);
}

console.log(oddLengths(strs));

// Use reduce to compute the sum of the squares of all of the
// numbers in an array:

let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83
// Note that 83 is 3*3 + 5*5 + 7*7.

const sumOfSquares = arr => {
  return arr.reduce((preVal, curVal) => preVal + (curVal ** 2), 0);
}

console.log(sumOfSquares(array));

// This problem is more challenging than most in this book. Don't
// worry if you can't solve it on your own.
// Write a function similar to the oddLengths function from Exercise
// 6, but don't use map or filter. Instead, try to use the reduce 
// method.

arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

const oddReduceLens = arr => {
  return arr.reduce((filteredNums, curVal) => {
    if (curVal.length % 2 !== 0) {
      filteredNums.push(curVal.length);
    }

    return filteredNums;
  }, []);
}

console.log(oddReduceLens(arr));

// Without using a for, while, or do/while loop, write some code
// that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
// Return true or false depending on each result.

let num1Res = numbers1.includes(3);
let num2Res = numbers2.includes(3);
let num3Res = numbers3.includes(3);

console.log(num1Res, num2Res, num3Res);

// Write some code to replace the value 6 in the following array
// with 606:

let a = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
// You don't have to search the array. Just write an assignment that
// replaces the 6.
a[1][3] = 606;

console.log(a);