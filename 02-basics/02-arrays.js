const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros); // pushes the array as a single element
// console.log(marvelHeros); // also it changes the array on which it is called on
// console.log(marvelHeros[3][1]); // first value of the array push

// const allHeros = marvelHeros.concat(dcHeros); // it returns a new array containing elements of both the array
// console.log(allHeros);

// spread operator (it is like glass is thrown down on ground break the array into pieces and then returns a new array combining all the arrays)
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6], 7, [6,7,[8,9]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Ahmad")); // returns true or false
console.log(Array.from("Ahmad")); // returns an array
console.log(Array.from({name: "ahmad"})); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

