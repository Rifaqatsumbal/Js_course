// If we have more values in a function to handle, like to caluculate price of the items in cart.  
// we will use Rest operatator, "..."  it is spread operator in actually but use case is diffrent

function calculateCartPrice(...num1){
    return num1
}
result = calculateCartPrice(100,200,300,400,500)
console.log(result)         // this will return an array [ 100, 200, 300, 400, 500 ], then can add all values

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing Object in a functions
// object is user
const user = {
 username: "Rifa",
 price: 399
}
function handleObject(anyObject){                           // anyobject anyname to make generic
return `User name is ${anyObject.username} and price is ${anyObject.price}`
}
result = handleObject(user)      // we passed object while calling the function
console.log(result)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Passing Array in a function
const myNewArray =[100,200,300,400,500]
function printSecondValue(getArray){
    return getArray[1]                      // this will return 2nd value an the array

}
console.log(printSecondValue(myNewArray))               // 200
// OR

result = printSecondValue(myNewArray)
console.log(result)                                 // 200, assigned a variable and printed that