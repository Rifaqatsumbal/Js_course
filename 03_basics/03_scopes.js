// function scope or if else scope, the syntex within {} of a function or if_else condition. 
/* using var is not recommended, becuase if it is declared within the scope it will give value outside the scope
which big issue */

// For Example we declare all three within a scope
if(true){
    let a =10
    const b = 20
    var c = 30
}
//console.log(a)
//console.log(b)
console.log(c)                          // this can be accessed outside the scope which is not good

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nested Scope
// functions within function or condition within conditions we called it nested scope
// In nested scope child can access parent variables. 
// We can not access a variable outside its scop, in simple outside {} of the scope. 
