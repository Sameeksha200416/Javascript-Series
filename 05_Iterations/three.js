//for of loop
//it is basically array specific loop like [" ","",""] and [{},{},{}]
// const arr = [1,2,3,4,5]
//  for(const iterator of object){

//  }
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
// const greeting = "hello world"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }
//Map

const map = new Map()
map.set('USA',"united state of america")
map.set('In',"India")
map.set('fr',"franch")
// console.log(map);
for(const[key,value]of map){
    console.log(key,':-',value);
}
const myObject = {
    'game': 'NFS',
    'game2': 'Spiderman'
}
for(const [key,value]of myObject){
    console.log(key,':-',value);
}