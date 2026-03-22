// for of

// ["","",""]
// [{},{},{}]

// syntax: for (const element of object) {  }  
// here object is not {} this object, but anything jiske upar loop lagana h

const arr = [1,3,2,4,5]
for (const num of arr) {
    console.log(num);
}  //no declaration needed like arr.length, num++ etc

// const greetings = "Annyeonghaseyo Seoul!!"
// for (const greet of greetings) {
//     if (greet == "!" && " " ){
//         continue;
        
//     }
//     console.log(`Say ${greet}`);
// }

const greetings = "Annyeonghaseyo Seoul!!"
for (const greet of greetings) {
    if (greet == "!" || greet == " " ){  //we cant write greet == "!" || " " directly bcz " " is truthy value remember?, it will not print anything, thats why we write as greet == "!" || greet == " "
        continue;
        
    }
    console.log(`Say ${greet}`);
}


// maps: key-value pair collection; unique values only

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('SK',"South Korea")
console.log(map);

for (const [key, value] of map) {   //syntax
    console.log(key, " ~ ", value);
}

// for of on object
const myObj = {
    game1:"BGM",
    game2 : "Subway Surfers",
    game3 : "Puzzle Mania"
}
 for (const [key, value] of myObj) {
    console.log(key, "=>", value);
 }

// object is not iterable like this