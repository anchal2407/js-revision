const marvel = ["ironman","thor","captain"]
const dc = ["superman", "flash", "batman"]

//MERGING ARRAYS

//1.
// marvel.push(dc)         //adds dc array as one element in marvel as an ARRAY
// console.log(marvel);

//2.
// console.log(marvel[3][1]);   //soln, adds @1 index element of dc from @3 index element of marvel, marvel[3]=>dc[1]

//3.
//another method for merging two** arrays
const allheros = marvel.concat(dc)   //returns new array, push donot return new array, modifies previous one
console.log(allheros);
//since newarray is returned when concat, we hv to give a variable to it, means cant give directly marvel.concat(dc)

//4.
//easy method- spread operator- can be used for mmultiple array merging at once
const allheros2 = [...marvel, ...dc]
console.log(allheros2);


//array into array situation, merging

const anotherArr = [1,2,3, [4,5,6], 7,[9,8,[2,5]]]

const oneArray = anotherArr.flat(Infinity)   //flat(depth): depth can be any value, for on how many levels of breaking subarrays, infinity for all levels, means break every array into array into array to form single array 
console.log(oneArray);

//converting anything into array

console.log(Array.isArray("Anchal"))   // asking is anchal is array

console.log(Array.from("Anchal"));    //in place of a string we can give anything to convert it into array
console.log(Array.from({name: "Anchal"}));  //interesting: output gives an empty array if the given value is non convertible/confusing, we use specific key or value keywords for this situation

let score1 = 78
let score2 = 23
let score3 = 97

console.log(Array.of(score1,score2,score3));

//Array.isArray, Array.from, Array.of