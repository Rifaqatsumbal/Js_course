// numbers 
const score = 400
console.log(score);

// we can defind the number as number like
const balance = new Number(100) // defind that it is numbertype
console.log(balance);
console.log(balance.toFixed(2)); // we can precise number after decimal point like 1,2 etc
console.log(balance.toString());   // converted to string then we can apply string properties like length etc
console.log(balance.toString().length); // this will give lenght

// New geting other number
const otherNumber = 123.856         // result = 124
console.log(otherNumber.toPrecision(3)); // this will precise to 3 number and round off after decimal

// New number to check hundereds, commas 
const hundereds = 1000000    
console.log(hundereds.toLocaleString());  // result = 1,000,000 USA standered
console.log(hundereds.toLocaleString('en-IN')); // 10,00,000 indian style like laks

// ++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++
//console.log(Math);
console.log(Math.abs(14))       // absolute value
console.log(Math.round(4.6))    // it will round off the value to 5
console.log(Math.ceil(3.2))     // this will give 4, it will get top value
console.log(Math.floor(3.9))    // this will give 3, it will get floor value

// About random number, like in dice game
console.log(Math.random()) ;                //each it will give diffrent value between 0-1 i.e 0.23671
console.log(Math.random()*10) +1            // this will give value between 1-10 with decimal number
console.log(Math.floor(Math.random()*10)+1) // this will floor number without decimal

// some time need to define min and max, like number between 10-20
const min= 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min) // this will give values between 10-20 with decimal
// Note: rememeber the above formula will use in daily life use