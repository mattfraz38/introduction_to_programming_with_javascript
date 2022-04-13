// What does this code log to the console? Does 
// executing the foo function affect the output? Why or why not?
// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

// This code logs 1 and execution of the foo function
// does not affect it. The bar variable inside the foo
// function is a separate locally scoped variable
// from the first declaration of bar

// In the exercises for the previous chapter, you wrote a dynamic 
// greeter program named greeter.js. Add a function to this program 
// that solicits the user's first and last names in separate 
// invocations; the function should return the appropriate name as a 
// string. Use the return values to greet the user with their full 
// name.

const rlSync = require('readline-sync');

function getName(prompt) {
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What\'s your first name?\n');
let lastName = getName('What\'s your last name?\n');

console.log(`Hello, ${firstName} ${lastName}`);

// Write a program that uses a multiply function to multiply two 
// numbers and returns the result. Ask the user to enter the two 
// numbers, then output the numbers and result as a simple equation.

let getNum = (prompt) => {
  let num = rlSync.question(prompt);
  return num;
};

let multiply = (number1, number2) => {
  return number1 * number2;
};

let num1 = Number(getNum("First number: "));
let num2 = Number(getNum("Second number: "));

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// What does the following code log to the console?
// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');

// nothing is returned because the function
// returns before the console.log expression 

// What does the following code log to the console?

// function scream(words) {
//   return words + '!!!!';
// }

// scream('Yipeee');

// again nothing is returned because scream does create Yipeee!!!!
// but it is never logged to the console