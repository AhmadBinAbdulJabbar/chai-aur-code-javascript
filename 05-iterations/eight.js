// reduce

const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(acc, currentValue){
//     console.log(`acc:  ${acc} and currentValue ${currentValue}`);
//     return (acc + currentValue);
// }, 0); // initail value of acc = 0

const myTotal = myNums.reduce( (acc, currentValue) => acc + currentValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 999,
    },
    {
        itemName: "Mobile dev course",
        price: 5999,
    },
    {
        itemName: "Data science course",
        price: 12999,
    },
];


const totalCart = shoppingCart.reduce( (acc,item) => acc + item.price , 0)
console.log(totalCart);

