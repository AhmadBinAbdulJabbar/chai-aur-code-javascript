// singleton
// Object.create

// symbols in js
const mySym = Symbol("key1");

// object literals
const jsUser = {
    name: "ahmad",
    "full name": "ahmad bin abdul jabbar",
    // mySym: "myKey1", // wrong
    [mySym]: "myKey1", // correct
    age: 22,
    location: "Bahawalpur",
    email: "ahmad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// accessing the objects keys and values
console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);

// not thecorrect way to access a symbol
// console.log(jsUser["mySym"]);
// console.log(typeof jsUser["mySym"]);

// correct way
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]); // not showing symbol in type?

// freezing the object so that the values cannot be changed
// jsUser.email = "ahmad@chatgpt.com";
// Object.freeze(jsUser);

// jsUser.email = "ahmad@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}


// console.log(jsUser.greeting); // returns function reference
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}

console.log(jsUser.greetingTwo());
