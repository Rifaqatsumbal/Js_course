let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString()) // this will give "Mon Jan 23 2023" month start from 0

// yy-mm-dd
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());