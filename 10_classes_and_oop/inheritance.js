class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `${this.username} is logged in`
    }
}

class Teacher extends User{   //extends keyword to inherit user class 
    constructor(username, email, password){
        super(username)    //works as call function, upar username as attribute bhi lena padega
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course added by ${this.username}`)    
    }
}

const TeacherOne = new Teacher("Anchal", "a@g.com", 123)
TeacherOne.addCourse()

const User1 = new User("Harry Styles")
User1.addCourse()     //nope, user class cannot acces teacher class items

TeacherOne.logMe()     

console.log(TeacherOne instanceof User)   //True
console.log(TeacherOne instanceof Teacher)     //True

