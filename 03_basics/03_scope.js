//var c = 300    //Global scope

let a = 400
//this is block scope
if (true) {
    let a = 10
    const b = 11
    //var c = 78
    console.log("INNER:",a)
}
console.log(a);
//console.log(b);
//console.log(c);

