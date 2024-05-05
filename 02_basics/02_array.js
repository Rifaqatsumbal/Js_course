// concat and spread

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

All_heros = marvel_heros.concat(dc_heros); // out put = [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
console.log(All_heros);

// spreed is commonly use for combining arrays, as you can combine two or more than two array 

const all_new_heros = [...marvel_heros, ...dc_heros]; // ... are spread method
console.log(all_new_heros); // output = [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

console.log(Array.isArray("Rifa Khan")) // will ask is it array. will return false
console.log(Array.from("Rifa Khan"))    // will create array from Rifa Khan
console.log(Array.from({name: "Rifa Khan"})) // Intersting case, to creat array from Object

// we can use Of like
let score1= 100
let score2= 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // outPut = [ 100, 200, 300 ]