//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log(`5 is the best number`);
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}, with outer loop ${i}`);
        const table = i + " * " + j + " = " + i*j
        // console.log(table);
        
    }
    
}

const myarray = ["RDJ", "Dcap", "Mathew", "Joe"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        break;
        
    }
    
    console.log(i);

    
}
// break is used to terminate/end the loop
// continue to terminate the loop for that perticular condition(one time) and to continue the external loop as it is

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue;
        
    }
    
    console.log(i);

    
}