class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}@#!`
    }

    UppercaseName(){
        return `${this.username.toUpperCase()}`
    }

}

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());

console.log(new User("Jimmy Shergill", "JS@e.com", 123).encryptPassword())
console.log(new User("Jimmy Shergill", "JS@e.com", 123).UppercaseName())


//Behind the scene(w/o classes)

function UserBts(username, email, password) {
    this.username=username;
    this.email=email;
    this.password=password;
    
}

UserBts.prototype.encryptPassword = function() {
    return `${this.password}$*#`
}

UserBts.prototype.UppercaseName = function () {
    return `${this.username.toUpperCase()}`
}

console.log(new UserBts("Rehmaan Dakait", "maut@g.com", 123).encryptPassword())
console.log(new UserBts("Rehmaan Dakait", "maut@g.com", 123).UppercaseName())