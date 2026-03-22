const coding = ["js", "cpp", "python", "java", "ruby"]

// coding.forEach( function (val){

// })

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)   //printMe as a reference, not as ana execution(printMe())

//***
coding.forEach( (item, index, arr) => { //all these three things can be accesed from an array
    console.log(index, item, arr);
})

// rray k andar object: [{},{},{}]
const myCoding = [
    {
        langName: "javascript",
        langFilename: "js"

    },
    {
        langName: "python",
        langFilename: "py"

    },
    {
        langName: "c++",
        langFilename: "cpp"

    },
    {
        langName: "java",
        langFilename: "java"

    }
]

myCoding.forEach( (item) => {
    console.log(item.langFilename);
})