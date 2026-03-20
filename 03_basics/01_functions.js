function sayMyName(){
    console.log("A")
    console.log("S")
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result    //reurn k baad jo bhi hoga wo execute nhi hoga
    return number1 + number2
}
const result = addTwoNumbers(5,2)
console.log("Result: ", result);


function loginUser(username){
    return `${username} just logged in`
}

console.log(loginUser("Anchal"));    
// console.log(loginUser()); //if no argument passed, output gives undefined, and not null**
//solution:
function loginUserAgain(username){
    if(username === undefined){    //also can use if(!username)
        console.log("Please enter a username");
        return      //used so that in this condition next line must not execute
    }
    return `${username} just logged in`
}

console.log(loginUserAgain());

function calculateCartPrice(...num1){     //here ... is rest operator, gathers all the arguments passed later in an array, which can be further used for calculations
    return num1
}

console.log(calculateCartPrice(100,334,64223,333));

//object handling in f()
const user = {
    username: "frances",
    price: 199
}

function handleObject(anyobject){       //anyobject for generic purposes otherwise direct object name can also be used
    console.log(`${anyobject.username} buys at price ${anyobject.price}`); 
}
handleObject(user)
handleObject({    //object as an argument
    username: "kevin",
    price: 299
})

//similarly passing an array in f()

const myNewArray = [299, 100, 99, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));   //can be passed directly



