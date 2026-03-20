// object declare=>2 ways=>constructor/sleleton& object literal
// skeleton/constructor method: Object.create

// object literals

const mysym = Symbol("key1")    //declaring symbol to use in object as a key
const JsUser = {
    name: "Anchal",
    "full name": "Anchal Singh",
    [mysym]: "mykey1",
    age: 23,
    location: "Ahmedabad",
    email: "anchal@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Wednesday", "Friday"]
}
//see how symbol is declared as a key in this object

console.log(JsUser.email)    //can be used but not proper way to access key of an object
console.log(JsUser["email"])  //right way
console.log(JsUser["full name"])    //bcz of this kind of situation where keys are in quotes
console.log(JsUser[mysym])     //accesing symbol key

//changing object values
JsUser.email = "anchalchanged@gmail.com"
// Object.freeze(JsUser)    //locks values in an object
// JsUser.email = "anchalshouldnotchange@gmail.com"    //will not change the value
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //this keyword is imp to reference to same object, objectname.keyname,in this case JsUser.name can also be used
}
console.log(JsUser.greetingtwo());