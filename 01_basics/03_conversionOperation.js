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
console.log(stringNumber);
console.log(typeof stringNumber);