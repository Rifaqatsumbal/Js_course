// To learn arrow function first we learn 'this'
// this refer to current contex

const user={
usrname: "Rifa",
price : 999,
welcomeMessage:function(){
console.log(`${this.usrname}, welcome to Website`);
    }
}
user.welcomeMessage()
user.usrname = "Sam"                    // we update username here then see
user.welcomeMessage()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// we can not use 'this' in functions, it is used in object like above
// let see out of this in function
function chai(){
   let username ="Rifa"
    console.log(this.username);   // output : undefined
}
chai()

//+++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++
// In arrow functions we replace function key word with "=>"
// const addTwo =() =>{}       this is basic syntex
const addTwo=(num1, num2) =>{
return num1 + num2
}
console.log(addTwo(3,4))

// Implecent return written in single line by removing prenthesis and return key word
const addTwoNew = (num1, num2) => (num1 + num2)
console.log(addTwoNew(4,5))

// Note: If you use {} then you will write return keyword, if you use parenthsis then no need to write return
// to return object we will write, const addTwoNew = (num1, num2) => ({username: "Rifa"})