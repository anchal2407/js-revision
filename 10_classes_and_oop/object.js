function multipleof5(num){
    return num*5
}

multipleof5.power = 2
console.log(multipleof5(5));
console.log(multipleof5.power);
console.log(multipleof5.prototype);

// constructing a prototype 

function createUser(Username, score) {
    this.Username = Username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printPrice = function(){
    console.log(`price is ${this.score}`)
}

const user1  = new createUser("tea", 100)    //new keyword is important
const user2 = new createUser("coffee", 500)

user1.printPrice();
user2.printPrice();
user1.increment();
user2.increment();
console.log(user1);