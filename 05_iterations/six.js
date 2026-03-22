const coding = ["js", "cpp", "python", "java", "ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);    
// //o/p: undefined => for loop doesnt return anything

// filter operation(it returns value)
// RETURNS the elements of an array that meet the condition

const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)    //bcz it returns values

console.log(newNums);

// const newNums = myNums.filter( (item) => {
//     // num > 4    //wrong
//     return num>4
// })   //implicit remember?, ehenver to use {} hv to write return keyword(check 03basics:arrow.js:line 45)

// with forEach
const newNumsAgain = []
myNums.forEach( (num) => {
    if (num<5){
        newNumsAgain.push(num)
    }
})
console.log(newNumsAgain)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let UserBooks = books.filter((bk) => bk.genre === "Fiction")
console.log(UserBooks);

UserBooks = books.filter((bk) => { return bk.publish > 2000; })   //{} used 
console.log(UserBooks);

UserBooks = books.filter((bk) => { return bk.publish >= 1995 && bk.genre === "History"})
console.log(UserBooks);