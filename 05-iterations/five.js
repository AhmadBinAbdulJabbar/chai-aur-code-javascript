// for each loop
const coding = ["js", "ruby", "java" ,"cpp", "python"];

// coding.forEach( function (item) {
//     console.log(item);
// }  )

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe); // giving the reference of the function don't call the function meaning execute by putting the ()

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js",
    },
    {
        languageName: "Java",
        languageFile: "java",
    },
    {
        languageName: "Python",
        languageFile: "py",
    },
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
})