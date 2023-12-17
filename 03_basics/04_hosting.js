//Nested scope

function one(){
    const username = "sam"
    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);
    
    two()
}

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "Youtube"
       // console.log(username + website);
    }
    //console.log(website);
}

// +++++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++

console.log(addone(5))
function addone(value){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
