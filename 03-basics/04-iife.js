// Immediately Invoked Function Expressions (IIFE)
// to avoid the global scope pollution we use iife


// this is named iife as it has a name
(function chai() {
    console.log(`DB CONNECTED`);
})();

// in short
// ()()

// chai();

// simple iife
( (name) => {
    console.log(`db connected two ${name}`);
})("ahmad");

// like we do this
// chai("ahmad");

