let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);//printing that number

//Note conversion in number
//"33" => 33
//"33abc" => NaN(not a number)
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//Investigation study 0f conversion of boolean
//1 => true; 0 => false;
//(empty string)"" => false
//"sam" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **********************************OPERATIONS**********************************************

let value = 3
let negValue = -value
// console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 ="hello"
let str2 = "sam"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 +"2");//this is applyble but not correct way and this is ,messy way to write code
// console.log((3+4)*5%3);

console.log(true);
//or
console.log(+true);
console.log(+"");

let num1,num2, num3
num1 = num2 = num3= 2+2

let gameCounter = 100
//gameCounter++;
//or
++gameCounter;

console.log(gameCounter);

//********Prefix and Postfix**************
//Postfix = x++
//Prefix = ++x

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;

console.log(`x:${a}, y:${b}`);
