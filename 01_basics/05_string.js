const name = "anchal"
const repoCount = 50
// console.log(name + repoCount + "anything")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// important-check the syntax, its not '' or "", its `` which is used. also ${}=>curly braces


const gameName = new String('anchal-sing-com')
// another way to generate string
// this is a way to generate any new object to be particular with mentioned datatype only, like new string(), new number etc

console.log(gameName[0]);
console.log(gameName.__proto__);  //another way to access object/ in this case string

// operations/properties/methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)   //index 0 t0 3
console.log(newString);

const anotherString = gameName.slice(0,4)  //or -8,4
console.log(anotherString);

// in substring, -ve values can be given but it will mwean nothing and the value will be treated as 0, wheras in slics -ve values are taken

const newStringOne= "   anchal   "
console.log(newStringOne.trim())

const url ="https://anchal.com/anchal%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('bruh'))

console.log(gameName.split('-'))   //split(separator,limit)
// both separator and limit are optional, if only split(), is used, output will return all the text as one element in an array
// split('')=>empty string=> o/p gives all the letters as an array
// limit=>integer value=>no. of substrings to include in output array we want


// MORE STRING FUNCTIONS ARE THERE, THESE ARE ONLY BASICS