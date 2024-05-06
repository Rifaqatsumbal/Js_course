//const tinderUser= new Object();             // we can use this

// Or
const tinderUser ={}        // this is also object
// Assigning values to the array
tinderUser.id = "123"
tinderUser.name = "Rifa"
tinderUser.isLoggedIn = false

console.log(tinderUser) // output: { id: '123', name: 'Rifa', isLoggedIn: false }

// object within object
const regularUser ={
    email: "some@gmail.com",
    fullName:{
        userfullName:{
            firstName: "Rifa",
            lastName: "Khan"
        }
    }
}
// to out put firstName, will use . notation to go nested
console.log(regularUser.fullName.userfullName.firstName)

// combining objects using spread
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 ={...obj1, ...obj2}
console.log(obj3)

// we can use assign as well for combining like
const obj4 = Object.assign({}, obj1, obj2) // empty curly braces is a common practice
console.log(obj4);

// data from database is loading in array format i.e objects in array
const users = [{
    id: 1,
    email: "rifaqat@gmail.com"
},
{
    id: 2,
    email:"rifa2@gmail.com"
}
]
// to access email of the second object
console.log(users[1].email)             // [] use for array, 1 for object number, 0 will be the first object


// destructuring Object
const course ={
    courseName : "Js in Hindi",
    price: 999,
    courseInstructor: "Hatish"
}

// Api Explained, get api from randomuser.me , and beautiy it by using jsonformatter.org

// The already learn concept in fine, but we can simplify more, if a thing is repeatly use
const {courseInstructor: instructor} = course  // we extract courseInstructor from course and name it as instructor
console.log(instructor)