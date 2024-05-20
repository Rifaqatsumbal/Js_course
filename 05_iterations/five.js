// foreach loop, very important for array. and use commonly use for arrays
//forEach(callback function)
const codings = ["js", "ruby", "python", "java"]
codings.forEach(function(item){                 // item can be any name, val, etc
   console.log(`${item}`)
})

//+++++++++++++++++++ forEach with arrow function +++++++++++++++++++

const codings2 = ["js1", "ruby1", "python1", "java1"]
codings2.forEach( (item)=>{                         // in arrow function we remove function keyword
console.log(item)
})

// +++++++++++++++++++++++++ Object within array +++++++++++++++++++++
// [{},{},{}]

const myCoding =[{                              // this is object
    languageName: "PHP",
    fileName: "php"
},
{
    languageName: "Python",
    fileName: "py"
}
]

myCoding.forEach( (item)=>{
console.log(`${item.languageName}`);                    // backTick is good approach, thats why I am using it
})

