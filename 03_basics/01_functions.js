// functions

function LoginUserMessage(username){
    return `${username}, just logged in`
}
result= LoginUserMessage("Rifa")   /* For simplicity I assign a variable and print that variable, we can 
                                    directly console, like console.log(LoginUserMessage("Rifa")) */
console.log(result)



// Now we apply simply a condition while the username is passed or not
// for best practices we use Not simple "!" for undefined
function LoginUserMessage2(username){
    if(!username){
        console.log("Enter your name please");
        return
    }
    return `${username} just logged in`   // "If we donot pass argument Rifa2, it will If statmenet."
}
result = LoginUserMessage2("Rifa2")
console.log(result)


// we can pass defualt value as well, in such cases If statement will always be false
function LoginUserMessage3(username = "Unkownn"){                // username = "Unknown", is defualt
    if(!username){
        console.log("Enter your name please");
        return
    }
    return `${username} just logged in`   // "If we donot pass argument Rifa3, it will print username "Sam"
}
result = LoginUserMessage3()         // pass Rifa3 0r will print "Unknown"
console.log(result)

