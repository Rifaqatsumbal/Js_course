// Nullish coalescing Operator (??), used for null , undefined

let val1;
val1 = null ?? 10
console.log(val1)     // if value null then it will print second value otherwise first value

// same for undefined value

//++++++++++++++++ Terniery Operator ++++++++++++++++++++++++++++++
// condition ? true: false, in actual it is short if else
const teaPrice = 100
teaPrice <=80 ? console.log(`the price is less than 80`) :console.log(`the price is greater than 80`)
