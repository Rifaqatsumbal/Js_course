// for of, loop, used for array specially. 
const arr = [1,2,3,4,5] 
for(const num of arr){
    console.log(`${num}`); // or you can use, console.log(num) 
}
//++++++++++++++++++++ 'for of'  for string ++++++++++++++++++++
const greetings = "Hello World"
for(const greet of greetings){
 //   console.log(`each of char is ${greet}`)  // it will print each character one by one
}

//+++++++++++++++++++++ Maps ++++++++++++++++++++++++++++++++++++
// maps have unique value, it will not duplicate value
const map = new Map
map.set('Pk', "Pakistan")
map.set('Fr', "France")
map.set('IN', "India")
map.set('Pk', "Pakistan") // try to check duplication
for(const [key, value] of map){
    console.log(`${key} :- ${value}`)
}