// Write a program that asks for your name
// then outputs "Hello, {name}! 
const rlSync = require('readline-sync');
let name = rlSync.question('What\'s your name? ');
console.log(`Hello, ${name}!`);

// Modify the program to ask for the user's first and 
// last names separately, then greet the user with their full name.
// What is your first name? Sue
// What is your last name? Roberts
// Hello, Sue Roberts!
let firstName = rlSync.question('What\'s your first name? ');
let lastName = rlSync.question('What\'s your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

// Modify the age.js program you wrote in the exercises for the 
// Variables chapter. The updated code should ask the user to enter 
// their age instead of hard-coding the age in the program. Here's 
// an example run:
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);