// variables and functions scopes in js

// var c = 300;
// var is global scope
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    c = 30;

    console.log("INNER: ", a);
}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(i);
// }
// console.log(i);

console.log("OUTER: ",a);
// console.log(b);
// console.log(c);

// global scope in node and in browser window is different we will know this when study DOM

function one() {
    const username = "ahmad"
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // error
    two();
}

// one();

if (true) {
    const username = "ahmad";
    if (username === "ahmad") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error

// +++++++++++++++++++++++++ interesting ++++++++++++++++++++

// basic function
console.log(addone(5));
// definition is after the function call still no error due to concept of hositing
function addone(num) {
    return num + 1;
}


// addTwo(5); // error
// the concept of hositing is not valid it seems
// expression
const addTwo = function (num) {
    return num + 2;
}
addTwo(5); // not an error

