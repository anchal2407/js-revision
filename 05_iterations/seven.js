// map performs operations filter returns/filters out things

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) => { return num + 10})

// CHAINING:

const newNums = myNumbers
                .map( (num) => {return num * 10;})
                .map( (num) => {return num+1;})   //iss num me upar wale command se jo value aayegi uska array hoga
                .filter( (num) => {return num>=40;})  //just iske upar wale command ki value ka array in num
    
console.log(newNums);