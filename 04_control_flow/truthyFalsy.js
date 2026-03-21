const userEmail = "james@g.ai"

if(userEmail){
    console.log(`Got user email`);
} else {
    console.log(`dont have user email`);
}

// falsy values: jinko maan lete h ki ye false hi h, for ex if u give these values to upper code, it will execute the else statement bcz it is considered false
// false, 0, -0, bigint, 0n, null, "", undefined, NaN

// truthy values: considered true 
// anything other than falsy values, "0", "false", " ", [], {}, function(){}


// to check array is empty:
const arrayOne = []
if(arrayOne.length === 0){
    console.log(`array is empty`);
}

// check object is empty:
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log(`object empty`);
}


// Nullish Coalescing Operator(??): null undefined
// 3 logical operators: &&, ||, ??

let val1;
val1= null ?? 7        //return 7
val1= undefined ?? 7   //return 7
val1= 5 ?? 7   //first value will be choosed
val1= null ?? 7 ?? 5     //returns first value after null/undefined

console.log(val1);

//Terniary operator(ifelse in one line)
// condition ? true : false

const iceTeaPrice = 200
iceTeaPrice <=100 ? console.log(`less than 100`) : console.log(`more than 100`)
