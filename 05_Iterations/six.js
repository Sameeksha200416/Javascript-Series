const coding = ["js","ruby","java","python","cpp"]

const value = coding.forEach((item) => {
   // console.log(item);
    return item
})
//console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num>4
})

console.log(newNums); 

const books = [
    {title:'BookOne',genre:'Fiction',publish:1981,edition:2004},
    {title:'BookTwo',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'BookThree',genre:'Histroy',publish:1999,edition:2007},
    {title:'BookFour',genre:'Non-Fiction',publish:1989,edition:2010},
    {title:'BookFive',genre:'Science',publish:2009,edition:2014},
    {title:'BookSix',genre:'Fiction',publish:1987,edition:2010},
    {title:'BookSeven',genre:'Histroy',publish:1986,edition:1996},
    {title:'BookEight',genre:'Science',publish:2011,edition:2018},
];
// const userBooks = books.filter((bk) => bk.genre === 'Histroy')
// console.log(userBooks); 

let userBooks = books.filter((bk) => bk.genre === 'Histroy')
userBooks = books.filter((bk) => {return bk.publish >= 2000})
console.log(userBooks);