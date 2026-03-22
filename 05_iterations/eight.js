// reduce method

myNums = [1,2,3]
// const myTotal = myNums.reduce( function (accumulator, currentvalue){
//     console.log(`accumulator = ${accumulator} & Current Value = ${currentvalue}`);
//     return accumulator + currentvalue;
// }, 0)
// console.log(myTotal);

// last me jo 0 h that is the accumulator ka value we assign(like loop me i ki value 0 dete the initial vaise), also can be assigned before as const accumulator = 0
// accumulator => 0 (whatever we initially give) => value after return executes(jo result aayega ek iteration k baad) => second iteration k baad jo value aayegi wo and it iterates like this
// currentvalue => values in the array for each iteration

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 3)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "toner",
        price: 999
    },
    {
        itemName: "moisturizer",
        price: 799
    },
    {
        itemName: "sunscreen",
        price: 999
    },
    {
        itemName: "lip tint",
        price: 599
    }
]

const TotalCartValue = shoppingCart.reduce( (initialValue, item) => initialValue + item.price, 0)
console.log(TotalCartValue);

//here item= current value which is in this case is an object=> item.price