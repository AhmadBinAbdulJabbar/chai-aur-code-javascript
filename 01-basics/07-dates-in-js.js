// from january 1, 1970, UTC in miliseconds

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
// date is an object
console.log(typeof myDate);

// let mycreatedDate = new Date(2023,0,23);
// console.log(mycreatedDate.toDateString());

// Date(year,month,day,hour,min)
// let mycreatedDate = new Date(2023,0,23,5,3);
// console.log(mycreatedDate.toLocaleString());

// yyyy-mm-dd
// let mycreatedDate = new Date("2023-01-14");
// console.log(mycreatedDate.toLocaleString());

// dd-mm-yyyy
let mycreatedDate = new Date("01-14-2023");
console.log(mycreatedDate.toLocaleString());


let myTimeStamp = Date.now(); // returns value in milisecond

// to compare two dates we use getTime function
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());


// console.log(Math.floor(Date.now() / 1000)); // in seconds

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // because it starts from 0
console.log(newDate.getFullYear());

console.log(`${newDate.getHours() + 5} and the minutes ${newDate.getMinutes()}`);

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "UTC",
})

console.log(newDate.getTime());
