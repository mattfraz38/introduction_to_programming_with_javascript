// What does this code log to the console? Why?

// let array1 = [1, 2, 3];
// let array2 = array1;
// array1[1] = 4;
// console.log(array2);

// [1, 4, 3] is logged because, while array1 and array2 are pointing
// to the same location in memory. The assignment of array2 with
// array1 does not create a new array copy, instad it references the
// origional object in mememory and any changes to one will be
// visible in the other

// What do the following error message and stack trace tell you?

// $ node exercise2.js
// /Users/wolfy/tmp/exercise2.js:4
//     console.log(greeting);

// ReferenceError: greeting is not defined
//     at hello (/Users/wolfy/tmp/exercise2.js:4:15)
//     at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
//     at Module._compile (internal/modules/cjs/loader.js:721:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
//     at Module.load (internal/modules/cjs/loader.js:620:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:552:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
//     at executeUserCode (internal/bootstrap/node.js:342:17)
//     at startExecution (internal/bootstrap/node.js:276:5)

// First I can see there is a ReferenceError and greeting is not
// defined. This error occured in the following path
// /Users/wolfy/tmp/exercise2.js on line 4, character 15

// Write some code to output the square root of 37.

let num1 = 36;
let num2 = 6;

console.log(Math.sqrt(num1));
console.log(Math.sqrt(num2));

// Given a list of numbers, write some code to find and display the
// largest numeric value in the list.

// List	              Max
// 1, 6, 3, 2	        6
// -1, -6, -3, -2	    -1
// 2, 2	              2

const list1 = [1, 6, 3, 2];
const list2 = [-1, -6, -3, -2];
const list3 = [2, 2];

const maxVal = arr => {
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach(el => {
    if (el > max) {
      max = el;
    }
  });

  return max;
}

console.log(maxVal(list1));
console.log(maxVal(list2));
console.log(maxVal(list3));

// Even simpler: Math.max(1, 6, 3, 2);
// To use elements in an array the spread operator is necessary:
// Math.max(...list);

// What does the following function do?

// function doSomething(string) {
//   return string.split(' ').reverse().map((value) => value.length);
// }

// First the function splits the string argument at each ' '
// character, the return value is an array. Then this return array
// is passed as an argument to .reverse() which reverses the array.
// The return of this is passed to the .map function  which will
// return the length of each of the values in the array.

// Write a function that searches an array of strings for every 
// element that matches the regular expression given by its
// argument. The function should return all matching elements in 
// an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// option 1
function allMatches(arr, pattern) {
  let matches = [];
  arr.forEach(word => {
    if (pattern.test(word)) {
      matches.push(word);
    }
  });

  return matches;
}

// option 2
const matchesWithFilter = (arr, pattern) => {
  return arr.filter(word => pattern.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

console.log(matchesWithFilter(words, /lab/));

// What is exception handling and what problem does it solve?

// Exception handeling is when you "test" some code and if there is
// an error you can capture it, do something with is, then the
// program will continue. If you don't do this then the program
// will simply stop and throw an error not continuing to any code
// following 

// Challenging Exercise This exercise has nothing to do with this
// chapter. Instead, it uses concepts you learned earlier in the
// book. If you can't figure out the answer, don't worry: this
// question can stump developers with more experience than you have.

// Earlier, we learned that Number.isNaN(value) returns true if
// value is the NaN value, false otherwise. You can also use Object.
// is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named 
// isNotANumber that returns true if the value passed to it as an
// argument is NaN, false if it is not.

const isNotANumber = val => {
  return val !== val;
}

let val = NaN;
let val2 = 5;

console.log(val);
console.log(isNotANumber(val));
console.log(isNotANumber(val2));

// Challenging Exercise This exercise has nothing to do with this
// chapter. Instead, it uses concepts you learned earlier in the
// book. If you can't figure out the answer, don't worry: this
// question can stump developers with more experience than you have.

// Earlier, we learned that JavaScript has multiple versions of the
// numeric value zero. In particular, it has 0 and -0. These
// numbers, while being mathematically nonsensical, are distinct
// values in JavaScript. We won't get into why JavaScript has a 0
// and -0, but it can be useful in some cases.

// There's a problem, however: JavaScript itself doesn't seem to
// realize that the values are distinct:

// > 0 === -0
// = true

// > String(-0)
// = '0'
// Fortunately, you can use Object.is to determine whether a value is
// -0:


// > let value = -0;
// > Object.is(value, 0)
// = false

// > Object.is(value, -0)
// = true
// There are other ways to detect a -0 value. Without using Object.
//is, write a function that will return true if the argument is -0 
// and false if it is 0 or any other number.

const isMinusZero = num => {
  return 1 / num === -Infinity;
}

console.log(isMinusZero(-0));
console.log(isMinusZero('hello'));
console.log(isMinusZero(5));
console.log(isMinusZero(0));

// Challenging Exercise This exercise has nothing to do with this
// chapter. Instead, it uses concepts you learned earlier in the
// book. If you can't figure out the answer, don't worry: this
// question can stump developers with more experience than you have.

// Consider this code:

// > let x = "5"
// > x = x + 1
// = "51"
// Now, consider this code:

// > let y = "5"
// > y++
// What gets returned by y++ in the second snippet, and why?

// 5 is  returned because first the post-increment operator uses
// coercion to turn "5" into 5, it is then incremented by one, but
// the return value of the post-increment operator is the origional
// value, not the increment value