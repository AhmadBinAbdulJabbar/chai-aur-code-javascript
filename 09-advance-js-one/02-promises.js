const promiseOne = new Promise(function (resolve, reject) {
    // "Producing Code" (May take some time)
    // Do an async tack
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

// "Consuming Code" (Must wait for a fulfilled Promise)
promiseOne.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);

}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "ahmad", email: "ahmad@example.com"});
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
}) 


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "ahmad", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})
// it does not return to the variable but it is chaining
// const useraname = 
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then( (myUserName) => {
    console.log(myUserName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
// console.log(useraname);


const promiseFive = new Promise( function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "ahmadbin", password: "12345"})
        }
        else{
            reject("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//      converting into json also takes time and so we need to await
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json()
}).then( (data) => { // these are called thenable
    console.log(data); // good thing about this is we do not need to write await try catch etc
})
.catch( (error) => console.log(error))
.finally( () => console.log("Finally fetch is finished"))

// an interesting thing to note is that fatch is running first then the above code output is displayed