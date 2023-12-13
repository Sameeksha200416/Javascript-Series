// 2 Method of object to declare: a)Literals b)Constructor
//Note: when we declare lateral method "singleton"is not formed
//But in constructor method singleton is formed.

//Objects Literals


const mySym = Symbol("key1")
const JsUser = {
    name: "SAM",
    "full name": "SAM VIS",
    [mySym]: "mykey1",   //mySym is normal string but when we need or refer mySym so we use square bracket i.e [mySym]
    age: 19,
    location: "Jabalpur",
    email: "sam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.age)
//OR
// console.log(JsUser["age"])
// console.log(JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "sam@chatgpt.com"
//Object.freeze(JsUser)  //freez means-Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.
JsUser.email = "sam@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//OR

// console.log(JsUser.greeting())

