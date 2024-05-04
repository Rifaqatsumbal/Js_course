// Array
const myArray = [0,1,2,3,4,5]
const myHeroes =  ["Quid", "Iqbal"]

const myArray2 = new Array(1,2,3,4)   // we can define this way as well, new Array is new instant of array
console.log(myArray2[0]);

// pusing a value in array

myArray.push(6)                 // this will add 6 in myArray 
console.log(myArray);

// pop will remove the last value
myArray2.pop()                  // this will remove 4 from myArray2
console.log(myArray2); 

// shift will remove first element from array
myArray2.shift()
console.log(myArray2);          // out [2,3], 4 remove by pop and 1 removed by shift

// include use to check element or index in array it will return true or false
console.log(myArray2.includes(2));      // this will return true as 2 exist in myArray2
console.log(myArray2.indexOf(2));       // this will give index of 2, will return 0

// Join bind and convert array into string
const newArray = myArray.join()
console.log(newArray);          // this will give 0,1,2,3,4,5,6

// learn little bit about slice and splice

