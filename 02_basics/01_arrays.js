// array

const myArr = [0,1,2,3,4,5]

console.log(myArr[0]);

//Array method

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9)

console.log(myArr.includes(9));
console.LOG(myArr.indexOf(3));

const newArr = myArr.join()   //joint work-Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);


//++++++++++++++++++++++++++ SLICE,SPLICE ++++++++++++++++++++++++++++
//Description-
//The slice() method returns selected elements in an array, 
//as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.
//-----------------
//SPLICE-The JavaScript array splice() method is used to add/remove the elements to/from the existing array. It returns the removed elements from an array. The splice() method also modifies the original array.

//------------------EXAMPLE-----------------------

const myn1 = myArr.slice(1,3)
console.log("A",myArr);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

