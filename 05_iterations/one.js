// For loop
for(let i=0; i<=10; i++){
const element = i;
console.log(element);
}

// +++++++++++ Using if within the loop +++++++++++++++
for(let i=0; i<=10; i++){
    const element = i;
    if(element==5){
        console.log(`5 is the best`)
    }
    console.log(element);
    }
// ++++++++++++++++++ Using loop within loop +++++++++++++++
for(let i=0; i<=10; i++){
    console.log(`Out loop value is ${i}`)
    for(let j=0; j<=10; j++){
        console.log(`${i}*${j} = ${i * j}`)         // this will print tables
    }
}
// Also try break and continue both are simple 

for(let i=0; i<=10; i++){
    const element = i;
    if(element==5){
        console.log(`We detected 5`)
        break;                              // once this condtion true, loop will break
    }
    console.log(element);
    }

    for(let i=0; i<=10; i++){
        const element = i;
        if(element==5){
            console.log(`we detected 5`)
            continue;                 // one this condtion true, it will print the statement and the loop will continue
        }
        console.log(element);
        }
