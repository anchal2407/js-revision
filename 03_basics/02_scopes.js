// global scope and block scope(anything in {})

function one(){
    const username = "anchal"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    //error dega isliye next line bhi execute nhi hogi

    two()
}

one()

if(true){
    const username= "anchal"
    if(username === "anchal"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);   //error, cannot access website
}                        

// console.log(username);    //error, cannot acces username


//***********interesting--hoisting************** 

console.log(addOne(7));      //will execute
function addOne(num){
    return num + 1
}
// console.log(addOne(7));     //obv will execute


// console.log(addTwo(7));         //will not execute bcz function is declared in a variable which is not declared yet
const addTwo = function(num){
    return num + 2

}
console.log(addTwo(7));     //will execute