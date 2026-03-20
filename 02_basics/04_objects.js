//constructor method/skeleton
// const tinderUser = new Object()   //singelton object
const tinderUser = {}     //non singelton object

console.log(tinderUser)

tinderUser.email = "user@tinder.com"
tinderUser.id = 12
tinderUser.name = "anchal"
tinderUser.loggedin = true
console.log(tinderUser)

const regularUser = {
    email: "regular@gmail.com",
    userdetail: {
        fullname: {
            firstname: "Anchal",
            middlename: "Sunil",
            lastname: "Singh"
        },
        age: 23,
        dob: 24/7/2002
    },
    isloggedin: false
}

console.log(regularUser.userdetail.fullname.middlename);
console.log(regularUser);

// merging objects
const obj1 = {
    1:"a", 2:"b"
}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const mergedObject1 = Object.assign(obj1,obj2,obj3)   //merges all objects in obj1
console.log(mergedObject1);
//since object.assign method returns an object, we better assign a new object name/space to it

const mergedObject2 = Object.assign({},obj1,obj2,obj3)     //safer way to use {} as a target object where other object will be copied/merged
console.log(mergedObject2);

//actual way we wil use*******spread operator*********
const mergedObject3 = {...obj1, ...obj2, ...obj3}    //simple+latest
console.log(mergedObject3);

//retrieving data from databases which is in array, objects in an arrayform
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "wd@g.com"
    },
    {}
]
console.log(users[1].email);     //users array k 1 index pe jo object h uska email key access

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //interesting keys accesed will be in an array form which can be further used for various purposes to put loop on it etc
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    //all the object in an array

console.log(tinderUser.hasOwnProperty('loggedin'));   //asks if object has this property or not


//many more methods are there in objects, check in prototype in inspect after using an object there


// destructuring
const course = {
    coursename: "javascript",
    price: 99,
    instructor: "Frances"
}

//course.instructor     can be used to abstract values but quite not clean code

const {instructor} = course
console.log(instructor);

const {instructor: inst} = course      //a certain short name can also be given to the key if we want
console.log(inst);
