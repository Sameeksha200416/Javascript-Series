//DATES

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleDateString);
 console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString);
console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0 , 23)
// let myCreateDate = new Date(2023, 0 , 23 , 5 , 3)
//let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

//String Interpolation
//`${newDate.getDay()} and the time is`

newDate.toLocaleDateString('default',{
    wekday: "long",
    timeZone: ''
});