// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    if (element === 5) {
        console.log("5 is best number");
    }
}

// console.log(element); // error

for (let i = 2; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    // console.log(`Table : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and i = ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }    
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue
// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`Detected 5`);
//         break;
//     }
    
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}


