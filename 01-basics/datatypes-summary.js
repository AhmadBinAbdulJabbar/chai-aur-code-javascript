// Primitive datatypes
// 7 types:
// String, Number, Boolean, null, undefined, symbol,BigInt

// Javascript is dynamic type language
const score = 100; // Number
const scoreValue = 100.3; // Number
// const score:number = 100; // typescript is static type language

const isLoggedIn = false; // Boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log("id = ", id, "\nanotherId = ",anotherId);
console.log(id === anotherId);

// const bigNumber = 987654321234567898765n;
// console.log(bigNumber);

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ahmad",
    age: 22,
}

// function as a variable
const myFunction = function () {
    console.log("Hello World");
}

myFunction();


// typeof operator
// null is object
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof myFunction); // function object

// ******************************************************************

// Stack (primitive type variables), Heap (Non - Primitive)

// primitive type is copied on stack
let myName = "ahmad";

let anotherName = myName;
anotherName = "ali";

console.log(myName);
console.log(anotherName);


// non-primitive data type reference in heap
let user1 = {
    email: "user@google.com",
    id: "user@id",
}

let user2 = user1;

user2.email = "ahmad@gmail.com";

console.log(user1);
console.log(user2);
