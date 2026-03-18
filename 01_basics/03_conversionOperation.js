let score = "33"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score2 = "24abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);  //number
console.log(valueInNumber2);  //NaN

let score3 = null
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);   //value will be 0 which is incorrect value

// incaseof undefined value conversion to a number, output or value gives NaN 

// incaseof boolean conversion to number, True=>1  False=>0


// conversion to boolean:
// 1=> true; 0=>false
// "" => false
// "abc" => true 