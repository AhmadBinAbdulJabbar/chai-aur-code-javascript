const name = "ahmad";
const repoCount = 50;

// outdated method for string concatnation
// console.log(name + repoCount + " Value");

// recommended method: use backticks (string templates)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string is an object not an array 
// the keys values are like array index
const gameName = new String('ahmadbaj');
console.log(gameName.__proto__);

// length property
console.log(gameName.length);
// methods 
console.log(gameName.toUpperCase());
// the original value of the string is not change as gameName is a reference of the string on the heap
// the reference can be change when we use let

// charAt gives the character located at that position
console.log(gameName.charAt(2));

// indexOf returns the index of the character passed
// if not found then -1 is returned
console.log(gameName.indexOf('t'));

// subString(start index key, end index key).
// the end index key value is included
const newString = gameName.substring(0,4); // 0, 1, 2, 3
console.log(newString);

// const newString = gameName.substring(-7,4); 
// you can not use negative values in substring, it will not give error but it will start from 0

const anotherString = gameName.slice(-7,4);
console.log(anotherString);


const newStringOne = "      ahmad        ";
console.log(newStringOne);
// trim() removes the starting and ending extra spaces (white space characters like space and new line enter)
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

// replace returns a new string with the value replaced
const url = "https://ahmad.com/ahmad%20bin";
console.log(url.replace("%20","-"));

console.log(url.includes("ahmad"));

const newName = "ahmad-bin-abdul-jabbar";
console.log(newName.split('-'));

