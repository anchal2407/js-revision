//immidiately invoked function expressions (IIFE)

(function iifecode(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    // unnamed iife
    console.log(`DB CONNECTED AGAIN`);
})();

// two reasons to use iife:
//1. to execute function immidiately
//2.(IMP)***to save the function from global scope pollution

// funcion packed in (), another (), to execute function, rather than writing new line to execute function iifecode()

// when two functions are executed as iife, always use ; at first function, nahi to aage aane wale func execute nhi honge

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("james")

// this is iife with parameters