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