// *****numbers******

const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

// properties/methods

console.log(balance.toString().length);
console.log(balance.toFixed(1));  //gives precision value with given no. of places after decimal, in this case 100.00

const otherNumber = 189.8323
console.log(otherNumber.toPrecision(3));  //try value 2, 4 etc, toprecision gives priority to values before decimal unlike tofixed

const hundreds = 100000000
console.log(hundreds.toLocaleString());   //put commas according to US standards in number by default(when no value is given in toLocaleStrint())
console.log(hundreds.toLocaleString('en-IN'));  //en-IN for indian standards, there r many more values for that place


// *******maths*******

console.log(Math);
console.log(Math.abs(-6));  //converts any value in positive
console.log(Math.round(9.7));
console.log(Math.ceil(6.2));   //round of to maximum value
console.log(Math.floor(6.9)); //round of to minimum value
console.log(Math.min(2,7,1,3,9));
console.log(Math.max(3,2,7,1,9,0));
//similarly, sqrt, power, pi etc.

console.log(Math.random());   //imp:values only b/w 0 and 1
console.log(Math.random()*10);  // but whatif it gives 0.06565, something like that, in that case see the next line\
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);   // for natural numbers from 1 to 9

// important:

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);    //for values from min to max(range)





