const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}
// const programming = ["js","rb","py","java","cpp"] 
// for (const key in object){
//     if (Object.hasOwnProperty.call(object,key)) {
//         const element = object[key];
//     }
// }

const map = new Map()
map.set('USA',"united state of america")
map.set('In',"India")
map.set('fr',"franch")
for(const key in map){
    console.log(key);
}