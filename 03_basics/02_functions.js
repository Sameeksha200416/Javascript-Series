//Day-2 Functions
function calculateCarPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCarPrice(200,400,500))

const user = {
    username: "sam",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"samee",
    price:399
})

const myNewArray = [200,400,200,900]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));