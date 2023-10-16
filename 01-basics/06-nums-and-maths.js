// Number data type
const score = 400;
console.log(score);
// Number as object
const balance = new Number(100);
console.log(balance);

// methods on Number
console.log(balance.toString());
// now string methods can be used on it.
console.log(balance.toString().length);

// toFixed (after point how many digit/decimal places to considers)
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));


let otherNumber = 23.8966;
// toPrecision(takes how many number both before and after the point should be consider excluding point meaning donot count point)
console.log(otherNumber.toPrecision());
console.log(otherNumber.toPrecision(3));

otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundrends = 1000000;
// toLocaleStirng returns a string that makes the number easiler to read
// console.log((hundrends.toLocaleString())); // by default it is in US standard of millions
console.log((hundrends.toLocaleString('en-IN'))); // in lacs

console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
// absolute value (only positive value)
console.log(Math.abs(-4));
console.log(Math.abs(45));

// round off function
console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.2));

// ceiling value means upper bound
console.log(Math.ceil(4.1));
// floor value means lower bound
console.log(Math.floor(4.9));

// maximum and minimum value of an array
console.log(Math.min(4,2,1,3));
console.log(Math.max(4,2,1,3));


// random function
// returns value 0 - 1

console.log(Math.random());
console.log(Math.random()*10); // 0 - 9
console.log((Math.random()*10) + 1); // 1 - 10
console.log(Math.floor(Math.random()*10) + 1); // 1 - 10

// creating a general formula
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

