const name = "sameeksha"
const repoCount = 50

//console.log(name + repoCount + "Value");   //old syntax

console.log('HELLO MY NAME IS ${name} and my repo count is ${repoCount}');   //New syntax of String

const gameName = new String('sammzzz')
console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//so it ignore -8 and it start from 0

const newStringOne = "  Sameeksha  "
console.log(newStringOne);

//The trim() method of String values removes whitespace from both ends of this string
// and returns a new string, without modifying the original string.
console.log(newStringOne.trim());


const url = "https://sam.com/sam%20vis"
console.log(url.replace('%20','-'))

//url.includes('sameeksha')

console.log(gameName.split('-'));

