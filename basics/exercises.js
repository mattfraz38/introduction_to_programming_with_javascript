// Concatenate two or more strings, one with your first name and 
// one with your last name to create a string with your full name
// as its value. Ex. 'John' and 'Doe' together gets 'John Doe'
// console.log('sally' + ' ' +  'mae');

// Use arithmetic operators to determine the individual digits of a 
// 4-digit number like 4936.
// 1. Thousands place is 4
// 2. Hundreds place is 9
// 3. Tens place is 3
// 4. Ones place is 6

let num = 4936;
const ones = num % 10;
console.log(ones);		// 4
num -= ones;
num /= 10;			// 493

const tens = num % 10;
console.log(tens);		// 3
num -= tens;
num /= 10;			// 49

const hundreds = num % 10;
console.log(hundreds);	 	// 9
num -= hundreds;
num /=10;			// 4

const thousands = num % 10;
console.log(thousands);		// 4 

// Identify the data type for each of the following values:
// 'true', false, 1.5, 2, undefined, { foo: 'bar' }

console.log(typeof 'true');		// string
console.log(typeof false);		// boolean
console.log(typeof 1.5);		// number
console.log(typeof 2);			// number
console.log(typeof undefined);		// undefined
console.log(typeof { foo: 'bar' });	// object

// Explain why this code logs '510' instead of 15.
console.log('5' + 10);

// the string value '510' is logged because the interpreter
// uses implicit type coercion to convert 10 from a number 
// to a string and then the two strings a re concatenated

// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(Number('5') + 10);	// 15

// Use the template literal syntax along with the expression 
// Number('5') + 10 to log the following sentence to the console:
//The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Will an error occur if you try to access an array element 
// with an index that is greater than or equal to the length 
// of the array? For example: 
// let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?

// No, an error will not occur, undefined will be returned

// Create an array named names that contains a list of pet names. For instance:
// asta, butterscotch, pudding, neptune, darwin

const names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin',];

// Create an object named pets that contains a list of pet names and 
// the type of animal. For instance: dog, cat, fish, lizard

const pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};
 
// What value does the following expression evaluate to?
// 'foo' === 'Foo'

// this will return false as === checks for not only
// the same value but also the same type

// What value does the following expression evaluate to?
// parseInt('3.1415')

// this evaluates to a number type of 3

// What value does the following expression evaluate to?
// '12' < '9'

// the expression evaluates as true since the operands are strings, 
// not numbers. When you compare two strings, JavaScript performs a 
//character-by-character comparison going from left to right, so on 
//the first comparison, it determines that '1' < '9', so '12' must be less than '9'
