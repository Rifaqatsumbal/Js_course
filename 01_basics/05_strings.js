const gameName = new String('Rifa khan')
console.log(gameName[0]);                // this will print value at 0 position which is 'R'
console.log(gameName.__proto__);        // this will print object

/* Note: If we copy and paste const gameName = new string('Rifa khan') in browser console it will give us
 prototype like length, uppercase, lower case, all these we can access directly */

// For example length
console.log(gameName.length);      // it will print 9
console.log(gameName.toUpperCase()) // it will print upper latter for the said variable

// trim method
const newStringOne = "   Rifa Khan   "
console.log(newStringOne.trim())   // this will remove extra spaces.

// replace method
const url = "https://rifa.com/rifa%20khan"  // I want to replace %20 with - 
console.log(url.replace('%20', '-'));   // this replace %20 with -