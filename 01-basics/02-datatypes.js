"use strict"; // treats all js code as newer version

// alert("3+3"); // we are using nodejs, not browser

// javascript works fine if we write single statement on a line 
// it is a good practice to use semicolon at the end of a statement but it is not mandatory

// console.log(3+3) console.log("ahmad") // will give error

console.log(3 
    + 3); // code readability should be high

console.log(3+3);
console.log("ahmad");

// official documentation of javascript is tc39.es
// mdn is also good documentation

// datatypes in js
let name = "ahmad"; // string
let age = 18; //number
let isLoggedIn = false; // boolean

// primitive datatypes

// number => (2 ^ 53) - 1
// bigInt
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assign
// symbol => to define unique

// object

console.log(typeof "ahmad"); //string
// finding variable type 
console.log(typeof name); //string

console.log(typeof null); //object -> reason for many error in language
console.log(typeof undefined); //undefined

