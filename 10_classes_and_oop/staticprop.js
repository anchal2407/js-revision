// static property: static keyword do not let any other object to get acces for that particular property/method
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){       
        return `123`
    }
}

const anchal = new User("anchal")
// console.log(anchal.createId())    //not accesed

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());      //cannot be accesed