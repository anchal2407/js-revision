const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)    //start me add krega
myArr.shift()       //remove start element
console.log(myArr);

// methods to ask questions

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()    //adds elements of an array into a string

console.log(myArr);
console.log(newArr);    //string

//slice & splice

console.log("A: ", myArr);

const myArrA = myArr.slice(1,3)
console.log(myArrA);     //in slice, end of range is not included i.e. 3, 1 to 2 only
console.log("B: ", myArr);    //no changes in base array

const myArrB = myArr.splice(1,3)
console.log(myArrB);      //in splice, both ranges are includes, i.e. 1 to 3
console.log("C: ", myArr);     // base array is changed, chopped

// slice=>donot manipulates original arr, only returns sliced value/array we provide
// splice=> manipulates original arr, chopps off the given array for the given range of elements