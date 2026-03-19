// ********date******

let myDate = new Date()

console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// SIMILARLY MANY PROPERTIES R THERE

let myCreatedDate1 = new Date(2026, 0, 24)  //year, month(0to11)**,date
console.log(myCreatedDate1.toDateString())

let myCreatedDate2 = new Date(2002, 6, 24, 8, 15)  //year, month, date, hour, minute
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate2.getTime());  //milisec value


let myTimeStamp = Date.now()    //millisecs me value dega
console.log(myTimeStamp);

// to covert millisec value to actual secs:
console.log(Math.floor(Date.now()/1000));
console.log(Math.floor(myTimeStamp/1000));

//methods in date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  //**GIVES VALUE FROM 0to11
console.log(newDate.getMonth() + 1);  //**we use this
console.log(newDate.getDay());  //etc





