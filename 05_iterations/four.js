// for in loop, used for object especially.
const myObject ={
    js: "Javascript",
    cpp: "C++",
    rb : "Ruby",
    swift: "swift by apple"
}
for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`)  // [key], will give values
}
