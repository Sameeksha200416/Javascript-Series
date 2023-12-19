//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( function aurcode() {
    console.log(`DB CONNECTED TWO`)
})();


//unIIFE name
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

//Two IIFE together
(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
})();
( function aurcode() {
    console.log(`DB CONNECTED TWO`)
})()

