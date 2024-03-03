//for-each loop
const coding = ["js","ruby","java","python","cpp"]
//by simple forEach function use
coding.forEach( function (item) {
    console.log(item);
})
//by Arrow function
coding.forEach( (item) => {
    console.log(item);
})
//by using reference
function printMe(item){
    console.log(item);
}


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const myCoding =[
{
    languageName:"Javavscript",
    languageFileName:"js"
},
{
    languageName:"Java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
},
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})