// loop on object
// for in

const myObj = {
    game1:"BGM",
    game2 : "Subway Surfers",
    game3 : "Puzzle Mania"
}
for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
}

// for in on array
const prog = ["js", "cpp", "py", "java"]
for (const key in prog) {
    // console.log((key));   //o/p: array ki keys jo by default 0 1 2 aese hoti h
    console.log(prog[key]);
    
}

