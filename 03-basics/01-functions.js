// function definition   
function sayMyName (){
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("D");
}

// function execution
// sayMyName();


// function addTwoNumbers(number1,number2){ // parametters
//     console.log(number1 + number2);
//     not returning any value
// }

function addTwoNumbers(number1,number2){ // parametters
    return(number1 + number2);
}

// passing different arguments
// addTwoNumbers(); // => NaN
// addTwoNumbers(3,4); // 7
// addTwoNumbers(3,'4'); // => 34
// addTwoNumbers(3,'a'); // => 3a
// addTwoNumbers(3, null); // => 3

const result = addTwoNumbers(3,5);
// console.log("result", result);

function loginUserMessage(username = "sam"){
    // if (username === undefined) {
    if (!username) { // same
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in `;
}

// console.log(loginUserMessage("ahmad"));
// console.log(loginUserMessage()); // undefined is returned not null

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "ahmad",
    price: 199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
};

// handleObject(user);
handleObject({
    username: "ali",
    price: 399,
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,1000]));

