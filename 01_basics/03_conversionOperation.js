/*  try by uncommenting
let score = 33 // value in already in number
console.log(typeof score); // will give type of the variable "score"
console.log(typeof(score)); // will give type of the variable "score"
*/

/* try by uncommenting
let score = "33"  // value in string
console.log(typeof score); // type is string
let valueInNumber = Number(score); // this will convert string into number
console.log(typeof valueInNumber); // it will give type number as converted above
console.log(valueInNumber); // this will give value stored in variable valueInNumber */


// Note: it will convert string into number even if score = "33abc", but when you print its value it will 
// give you NAN

// Summery try below value it will give you follow resut after conversion
// if "33" = 33, 
// "33abc" = NAN, 
// null = 0
// true = 1, false = 0

// lets try boolean conversion
let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // this will give you true value inverse for 0