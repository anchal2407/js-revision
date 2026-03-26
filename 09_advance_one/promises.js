const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "Frances", Book: "Conversations With Friends, email:sallyrooney@g.com"});

    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Mellisa", password: 12345})
        } else {
            reject("ERROR: Something went wrong P4")
        }
    }, 1000)
})

promiseFour
.then(function(user){
    // console.log(user);
    return user.username;
})
.then(function(nameUser){    //chaining is done
    console.log(nameUser);
})
.catch(function(error){      //for errors, this has one
    console.log(error)
})
.finally(function(){         //in the end, for confirmation promise has been fulfilled
    console.log("The promise is either resolved or rejected P4")
})



//async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: 12345})
        } else {
            reject("ERROR: JS went wrong P5")
        }
    }, 1000)
})

// async function consumePromiseFive(){
//     const response =await promiseFive
//     console.log(response);
// }
// consumePromiseFive();

// async await cannot handle error directly
//that is why use try catch:

async function consumePromiseFive(){
    try {
        const response =await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);       
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})