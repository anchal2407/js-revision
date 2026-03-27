//we use get set ALMOST same way as we use in class, a lil difference is 
//in naming the key(private property) of object and get set 


const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//see how parameters for object keyname & parameter for getset are differently written

const tea = Object.create(User)
console.log(tea.email);    //***imp: here getset wala parameter use hoga, bcz thats the overwritten property