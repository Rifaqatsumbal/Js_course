// Immediately invoked function Expressions
// ()() , first for function second for execution

(function chai(){
    console.log (`Db connected`)                // First Example
})();

// we can pass argument as well
(function chai(name){
    console.log(`Db connected by ${name}`) // same like we pass in traditional functions
})("Rifa");

// we arrow functions also work

//()()
