// in JS everything is an object: (objct, array, string, and function too) -->Object --> null
// creating and injecting prototype for all(objct, array, string, function)
//prototype means method
let myarr = [1, 2, 3]

let myobj = {user: "james"}

Object.prototype.sayHello = function (){
    console.log("hello there!")
}
//Object -> to inject prototype for all
myobj.sayHello()
myarr.sayHello()

//whatif i want to inject it only for an array->use Array

Array.prototype.heyARR = function(){
    console.log("hi, here only for array")
}

myarr.heyARR()

// myobj.heyARR()  //not work

//prototype inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
" anchal  ".trueLength()
"icedTea   ".trueLength()