// string is truthy value, if we dont campare it the const is string then it will return true

const userEmail = "rifa@gmail.com"
if(userEmail){
console.log(`The user have email ID`)
} else{
    console.log(`Dont have user Email`)
}

// empty string is false value  you can check by remove the value from UserEmail

// Falsy Values
// false, 0, -0, "", BigInt, On, null, undefined, NaN

// Truthy values
// true, "0", 'false', " ", [], {}, function(){}

// checking array and object whether empty or value
const myArry =[]
if(myArry.length===0){
    console.log(`the array is empty`)
}

// checking empty object
const myObject = {}
if(Object.keys(myObject).length ===0){
    console.log(`This is empty object`)
}