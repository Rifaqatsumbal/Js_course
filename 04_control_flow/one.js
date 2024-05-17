const score = 200

if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`)
}

// short hand notation "implicit scope", it will run in single line
const balance = 1000
if (balance>500) console.log(`you are rich man`);

// nested if
const amount = 1000

if(amount<500){
console.log(`The amount less than 500`)
} 
else if(amount<700){
console.log(`the amount less than 700`)
} 
else if(amount<900){
console.log(`The amount is less than 900`)
} 
else{
    console.log(`the amount greater than 900`)
}

// daily life use
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
console.log(`shopping allowed`)

}
// same we can use OR operator ||