// arrays in javascript

const myArr = [0,1,2,3,4,5];
console.log(myArr[0]); // zero based index

// copying an array makes a shallow copy (reference is copied) not a deep copy(a whole separate copy is created)

const myHeros = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[1]); // zero based index

// array methods
// inserting value at the end of the array
myArr.push(6);
myArr.push(7);
console.log(myArr);

// removing the last element of the array
myArr.pop();
console.log(myArr);

// inserting an element at the start of the array
myArr.unshift(9);
console.log(myArr);
// removing the first element of the array
myArr.shift();
console.log(myArr);

// includes tells if an array contains the passed value! returns true or falls
console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // returns -1 if it does not contain

// join binds and convert an string of all the array elements
const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3); // 1 and 2 elements will be returned (index 3 will not be included)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // 1, 2, 3 elements will be returned ( note the index 3 is also included)
console.log(myn2);
console.log("C ", myArr);


