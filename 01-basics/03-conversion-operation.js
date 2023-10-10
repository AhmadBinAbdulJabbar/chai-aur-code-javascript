/*

// let score = 33;
let score = "33abc";

// const {score} = req.body; // value from front end
 
// string conversion to number
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(valueInNumber); //NaN is Number
console.log(typeof valueInNumber);

// null conversion to number
score = null;
valueInNumber  = Number(score);
console.log(valueInNumber); //0 is a number
console.log(typeof valueInNumber);

// undefined conversion to numer
score = undefined;
valueInNumber  = Number(score);
console.log(valueInNumber); // NaN is a number
console.log(typeof valueInNumber);

// boolean value conversion to number
score = true;
valueInNumber  = Number(score);
console.log(valueInNumber); // 1 is a number
console.log(typeof valueInNumber);

score = false;
valueInNumber  = Number(score);
console.log(valueInNumber); // 0 is a number
console.log(typeof valueInNumber);

// pure string to number
score = "ahmad";
valueInNumber  = Number(score);
console.log(valueInNumber); // NaN (not a number) is a number
console.log(typeof valueInNumber);

// in short
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// number to boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// empty string to number
isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// string to number
isLoggedIn = "ahmad";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "ahmad" => true;

// number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);

*/
// ********************* Operations *********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); //add
// console.log(2-2); // subtract
// console.log(2*2); // multiply
// console.log(2/2);  // division
// console.log(2**2); // power
// console.log(2%3); // remainder

let str1 = "hello";
let str2 = " ahmad";
let str3 = str1 + str2; // only addition (concatination of string can be done) not subtraction
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(2 + 2 + "2");

// use paratheses for preference
console.log( (3 + 4) * 5 % 3);


// donot write this type of code
console.log(+true);
// console.log(true+); // error
console.log(+"");

// why use so many variables for same number (not recommended)
let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;

// see post and prefix operators from MDN



