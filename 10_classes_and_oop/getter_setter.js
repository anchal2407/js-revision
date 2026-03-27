class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}#!@`
    }
    set password(value){
        this._password = value

    }
}

const userOne = new user("anchal@g.com", "shubh")
console.log(userOne.password);

//check syntax clearly, its complicated
// return only with get, set doesnt hv return
//get set both are functions so () is necessary
//get set overwrites properties so that outsider cannot access the real property value
//usecase: password encryption, hidden values(security of info) etc