// Modify the age.js program you wrote in the exercises for the 
// Input/Output chapter. The updated code should use a for loop to 
// display the future ages.
const age = 34;
console.log(`You are ${age} years old.`);

for (let years = 10; years <= 50; years += 5) {
  console.log(`In ${years}, you will be ${age + years} years old!`);
}

// Write a function that computes and returns the factorial of a
// number by using a for loop. The factorial of a positive integer
// n, signified by n!, is defined as the product of all integers
// between 1 and n, inclusive:
const factorial = num => {
  let result = 1;
  for (let i = num; i > 0; --i) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

// The following code causes an infinite loop (a loop that never
// stops iterating). Why?
// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// the initial condition for the while loop is assigning 
// counter to equal 1, then performing the code within the block
// however upon each iteration the counter is re-assigned as 1
// thus creating an infinite loop

// Does the following code produce an error? Why or why not? What
// output does this code send to the console?
// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

// this does not produce an error and it does run, however there is
// no increment in the loop. each of the three parameters are 
// optional so there is no problem and incrementation is performed
// in the block therefore the result is the same as if it was
// incremented as usual

// The following code uses a randomNumberBetween function to 
// generate a number between its first and second arguments. It uses 
// a while loop to try to generate a number greater than 2. Refactor
// the code so that you don't need to call randomNumberBetween from
// two different locations, lines 6 and 10. Do not change the 
// arguments you pass to randomNumberBetween.

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result = randomNumberBetween(1, 6);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2')

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2')

// Reimplement the factorial function from exercise 2 using 
// recursion. Once again, you may assume that the argument is always // a positive integer.

const recursiveFactorial = num => {
  if (num === 1) return 1;

  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));