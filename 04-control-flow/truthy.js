// const userEmail = "a@gmail.com"; // consider true
const userEmail = ""; // consider false

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy value
// false 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}
// empty array, object function all are truthy values

const userArray = [];
if (userArray.length === 0) {
    console.log("Array is empty");
    // console.log("Truthy");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// false == 0 -> true
// false == '' -> true
// '' == 0 -> true

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

console.log(val1);

// terniary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");