// Write a program that greets 'Victor' three times
// it should use a variable and not be a hard coded value
// example output: 
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.
let name = 'Victor';

console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

// Write a program that includes someone's age
// then calculates and reports the future ate in
// 10, 20, 30, and 40 years. Example output:
// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

let age = 20;

console.log(`You are ${age} years old.`);
console.log(`In 10 year, you will be ${age + 10} years old.`);
console.log(`In 20 year, you will be ${age + 20} years old.`);
console.log(`In 30 year, you will be ${age + 30} years old.`);
console.log(`In 40 year, you will be ${age + 40} years old.`);

// What happens when you run the following program? Why do we get that result?
// {
//   let foo = 'bar';
// }
// console.log(foo);

// a reference error is returned. foo is not defined (out of scope)

// What happens when you run the following code? Why?
// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// the first three lines will log the greeting plus 'Victor'
// the sixth line will return an error because the constant
// NAME variable cannot be reassigned

// What does the following code log and why?
// let foo = 'bar';
// {
//   let foo = 'qux';
// }
// console.log(foo);

// 'bar' is logged because it is first initialized on line one
// then insie a block a new block level variable of the same name
// is initialized, but it is only available in the block

// Will this program produce an error when run? Why or why not?
// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }
// console.log(FOO);

// no, because the second constant declaration is block level scoped
