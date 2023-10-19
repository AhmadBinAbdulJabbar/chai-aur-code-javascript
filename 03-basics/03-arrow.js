const user = {
    username: "ahmad",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// console.log(this);
// in node it is empty object
// in browser it refers to  global window object

// this in functions in node
// function chai(){
//     let username = "ahmad";
//     console.log(this.username);
//     console.log(this);
// }

// chai();

// const chai = function () {
//     let username = "ahmad";
//     console.log(this.username);
//     console.log(this);
// }
// chai();


const chai = () => {
    let username = "ahmad";
    console.log(this.username);
    console.log(this);
}
// chai();

// simple arrow function
// () => {} 

// const addTwo = (num1, num2) => {
//      explicity return is used when {} are used
//     return num1 + num2;
// }


// implicit return when function is of one line only
// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

// console.log(addTwo(3,4));

// returning an object
const  objectReturn = () =>  ({username: "ahmad"});
console.log(objectReturn());


const myArray = [2,5.3,7,8];
// myArray.forEach(function () {}); // we use simple functions in forEach
// myArray.forEach(() => {}); // we can use arrow function as well
