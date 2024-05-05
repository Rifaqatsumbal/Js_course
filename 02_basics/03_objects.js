// singleton
// Object.create


// Object literals
const mySym = Symbol("key1")            // to test symbol value "unique" in object

const JsUser ={
    name : "Rifa khan",
    age : "18",
    email: "rifaqatsumbal@gmail.com",
    isLoggedIn : false,
    lastLogginDay: ["Monday", "Saturday"],
    [mySym]: "mykey1"                  // correct syntex to define symbol in object enclose it in squar brackets
}
console.log(JsUser.email);
console.log(JsUser["name"]);  // if two words
console.log(JsUser[mySym]);             // output: mykey1. if symbol

// update an object element like email
JsUser.email = "rifaqatsumbal@microsoft.com";
console.log(JsUser);   // print the array and check the email value,

// you can freeze an object so nothing will update, if you change any value
 //Object.freeze(JsUser);  // now we have freeze the object
JsUser.email = "rifaqatsumbal@newemail.com"
console.log(JsUser);

// Using function, we can use function same like variables
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(JsUser.greetingTwo());