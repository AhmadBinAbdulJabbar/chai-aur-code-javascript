// const tinderUser = new Object();
const tinderUser = {};
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "ahmad bin",
            lastName: "abdul jabbar"
        }
    }
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = obj1, obj2};
// const obj3 = Object.assign({}, obj1,obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 2,
        email: "ab@gmail.com",
    },
    {
        id: 3,
        email: "abc@gmail.com",
    },
];

console.log(users[0].id);
console.log(users[0].email);
// console.log(users[1].id);
// console.log(users[1].email);
// console.log(users[2].id);
// console.log(users[2].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns an array of keys
console.log(Object.values(tinderUser)); // returns an array of value
console.log(Object.entries(tinderUser)); // returns an array of entries

console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // returns true or false (depending upon it contains the property or not).


///////////////////////////////////////////////////////////////////
// object de-structure and JSON API

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ahmad",
};

// object de-structure 
// course.courseInstructor;
// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(instructor);

// used in react like this
// const navbar = ({company}) => {

// }
// navbar(company = "fintech");

// JSON

// {
//     "name": "ahmad",
//     "coursename": "js in hindi",
//     "price": "free",
// }


// [
//     {},
//     {},
//     {},
// ]

