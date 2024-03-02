const userEmail = "sam@.ai"
if(userEmail){
    console.log("got user mail");
}
else{
    console.log("Don't have user mail");
}
//false value given below
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//True value (string ke ander value true hoti hai)
// "0",'flase'," "(string me space de ge toh true value hai ),[],{},function(){}
//case 1 ------o/p should be else case because of empty string
const Email = ""
if(Email){
    console.log("got user mail");
}
else{
    console.log("Don't have user mail");
}
//case 2 -------- o/p should be emails case because of empty array
const Emails = []
if(Emails){
    console.log("got user mail");
}
else{
    console.log("Don't have user mail");
}

const msg = []
if(msg.legth===0){
    console.log("got user mail");
}
const emptyObj ={}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty"); 
}

//Nullish Coalescing  Operator(??):Null undefined
let val1;
//val1=5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1  = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator
//---------------------way to write 
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")
