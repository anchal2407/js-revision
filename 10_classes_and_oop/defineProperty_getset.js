//previously get set were used in this format:

function user(email, password){
    this.Qemail = email       //HERE, KEYNAME MUST BE DIFFERENT FROM PARAMETER NAME
    this.Qpassword = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this.Qemail.toUpperCase()
        },
        set: function (value) {
            this.Qemail = value
        }
    })
}

const meow = new user("cat@email.com", 12312)
console.log(meow.email);