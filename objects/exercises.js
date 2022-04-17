// Given the following code, how can you access the name of the person?

let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};

console.log(person.name);
console.log(person['name']);

// Which of the following values are valid keys for an object?

// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

// All the listed values are valid keys. Note, though, that
// JavaScript coerces the non-string key values to strings. Given
// the listed values, 1 and '1' represent the same key, as do true
// and 'true'

// Use object literal syntax (e.g., { key: value, ... } notation) to
// create an object that behaves as an array in a for statement. The
// object should contain at least 3 elements. You should place your
// code between the braces in the let statement:

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Create an array from the keys of the object obj below, with all
// of the keys converted to uppercase. Your implementation must not
// mutate obj.


let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
// objKeys.forEach((el, idx) => objKeys[idx] = el.toUpperCase());
let upperKeys = objKeys.map(el => el.toUpperCase());

// console.log(objKeys);
console.log(upperKeys);
console.log(obj);

// Create a new object named myObj that uses myProtoObj as its
// prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);