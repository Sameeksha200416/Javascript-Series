//This and Arrow functions - With arrow functions the this keyword always represents 
//the object that defined the arrow function.

//this keyword refer current context

const user = {
    username:"sam",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//browser ke ander jo object hai woh hai window object.


// user.welcomeMessage()
// user.username = "samii"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "sam"
//     console.log(this.username);

// }
// chai()

// const chai = function () {
//     let username = "sam"
//      console.log(this.username);
// }

//++++++++++++++++++ARROW FUNCTIONS+++++++++++++++++++++++++++++
const chai = () => {
    let username = "sam"
    console.log(this);
}
// chai()


//+++++++++++++++++++++++explicit return+++++++++++++++++++++++++++++



// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))
//Note:when we use curly bracket we should write "return" keyword like above example ^


//+++++++++++++++++++Implicit return+++++++++++++++++++++

//In implicit function we don't use curly bracket and donot write "return" keyword.

// const addTwo = (num1,num2) =>  num1 + num2

//OR
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Ishmeet"})

console.log(addTwo(3,4))
