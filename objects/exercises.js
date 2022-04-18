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

// Which of the following values are primitive values? Which are 
// objects? Which are neither?

// "foo"                            // primitive: String
// 3.1415                           // primitive: Number
// [ 'a', 'b', 'c' ]                // Object
// false                            // primitive: Boolean
// foo                              // Neither primitive nor Object
// function bar() { return "bar"; } // Object
// undefined                        // primitive: Undefined
// { a: 1, b: 2 }                   // Object

// Add a qux property with value 3 to the myObj object we created in
// the previous exercise. Now, examine the following code snippets:

myObj['qux'] = 3;

// Snippet 1
objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}
// Without running this code, can you determine whether these two
// snippets produce the same output? Why?

// objKeys is ['qux'] and this will be logged to the console in
// snippet 1
// in snippet 2 objKeys is ['foo', 'bar', 'qux'] and each of these
// will be logged to the console
// the difference comes from the iterator for..in and Object.keys
// function
// for..in will list all keys of an object as well as from it's
// prototype, however Object.keys will only list the key values
// owned by the calling object



// Create a function that creates and returns a copy of an object. 
// The function should take two arguments: the object to copy and an // array of the keys that you want to copy. Do not mutate the 
// original object.

// The function should let you omit the array of keys argument when 
// calling the function. If you do omit the argument, the function 
// should copy all of the existing keys from the object.

// Here are some examples for your reference:
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys) {
  let newObj = {};

  if (keys) {
    keys.forEach(function (el) {
      newObj[el] = obj[el];
    });

    return newObj;
  } else {
    return Object.assign(newObj, obj);
  }
}

console.log(objToCopy);     // => { foo: 1, bar: 2, qux: 3 }

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);       // => { bar: 2 }

// What does the following program log to the console? Why?

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

// the logged values are 'hi' and 'hello'
// objects are mutable but primitives are not

// How many primitive values are there in the following expression?
// Identify them. How many objects are there in the expression?
// Identify those objects.

// [1, 2, ["a", ["b", false]], null, {}]

// there are 6 primitive values and the types are:
// Number, String, Boolean, and Null

// Write some code to replace the value 6 in the following object
// with 606:

let obj1 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
// You don't have to search the object. Just write an assignment that replaces the 6.

obj1['bar'][3].xyz = 606;

console.log(obj1);