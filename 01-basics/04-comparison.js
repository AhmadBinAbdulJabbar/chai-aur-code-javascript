// simple comparisons

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// comparison with different datatypes
console.log("2" > 1);
console.log("02" > 1);


// comparison operators (<,>,<=,>=) converts the string/null or any other datatype to number first then compares
// equality check operator does not convert
console.log(null > 0); // null -> 0 so 0 > 0 => false
console.log(null == 0); // false as null is not converted into zero
console.log(null >= 0); // null -> 0 so 0 >= 0 => true

// with undefined it is always false
console.log(undefined == 0); 
console.log(undefined > 0); 
console.log(undefined < 0); 
console.log(undefined <= 0); 
console.log(undefined >= 0); 

// strict check ===
// checking datatype aswell in this it is not converted
console.log("2" === 2);


// don't use comparison with other datatypes 
// write clean code

