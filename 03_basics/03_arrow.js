const user = {
    username: "Frances",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }   
}

user.welcomeMessage()
user.username = "Nick"
user.welcomeMessage()

console.log(this);          //output-empty object


// function coffee(){
//     let username = "James"
//     console.log(this.username);     //undefined=>this donot work in functions
// }
// coffee()

// const chai = function(){
//     let username = "taylor"
//     console.log(this.username);   //undefined same
// }
// chai()


// arrow function
const chai = () => {
    let username = "taylor"
    console.log(this.username);  
} 
chai()

// implicit

// const addTwo = (num1 + num2) => {
//     return num1 + num2
// }
//can be written as:
const addTwo = (num1, num2) => num1 + num2 

// important: when {} are used then return keyword is mandatory, when we dont use curly braces then return keyword is not written, in implicit function syntax

console.log(addTwo(2,7));

// when writing an object, then we have to use () to wrap up
const obj = () => ({username: "james"})




