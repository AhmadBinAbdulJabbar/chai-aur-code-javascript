const accountId = 12345; // const variable
let accountEmail = "ahmad@gmail.com"; // let variable
var accountPassword = "1234"; // var variable (not recommended)
accountCity = "Bahawalpur"; // without any keyword (not recommended)
// javascript is a safe language that it declares a variable even if const, let or var are not used

let accountState; // value not given so it is undefine

// const can not be changed 
// if you try do it will give error in runtime not in development time
// accountId = 1000; // no error in the VS code
// but when you run this node js will give error
console.log(accountId);

// variable as its name tells we can change the value of it.
accountEmail = "ah@gl.com";
accountPassword = "123123";
accountCity = "Multan";

/*
Prefer not to use var
because of issue in block scope and functional scope
var is global scope
*/

// let is block scope so we use that now


console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


