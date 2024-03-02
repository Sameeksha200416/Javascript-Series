//if statement
/*
if(condition)
{
    write code
}
//operator
<
>
<=
>=
!=
===
*/
// const isUserloggedIn = true
// if(2==="2"){
//     console.log("executed");
// }
// const temperature =41
// if(temperature===40){
//     console.log("less thsn 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// //block scope
// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//shorthand notation
// const balance = 1000
// //here we dont use {} because it is implicit function becz it execute in single line
// if(balance>1000)console.log("test");
// //if(balance>1000)console.log("test"),console.log("test 1"); don't write this type of code
// if(balance <500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true
if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("use logged in");
}