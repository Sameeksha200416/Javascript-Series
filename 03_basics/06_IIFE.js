//Immediately Invoked Function Expressions(IIFE) -->  are JavaScript functions that are executed immediately after 
//they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


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

