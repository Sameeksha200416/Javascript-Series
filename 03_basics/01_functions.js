// // console.log("H");
// // console.log("I");
// // console.log("T");
// // console.log("E");
// // console.log("S");
// // console.log("H");

// function sayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// //sayMyName
// sayMyName()
// //Here Number1,2 are parameter and (3,4) are functions
// // function addTwoNumbers(Number1, Number2){
// //     console.log(Number1 + Number2);
// // }

// function addTwoNumbers(number1, number2){
//     // let result = Number1 + Number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3,"4")

// console.log("Result:",result);


function loginUserMessage(username = "sam"){
    if(username === undefined)//or (!username)
    {
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
