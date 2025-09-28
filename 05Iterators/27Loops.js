//for
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best")
    }
    console.log(element)
}

for (let i = 1; i <= 2; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`Outer loop value ${i} and Inner loop value ${j}`);
        console.log(i+"*"+j+"="+i*j)
    }
}

const array=["Flash","bat","ball"]
console.log(array.length)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

//break continue
for (let i = 0; i < 10; i++) {
    if(i==2){
        console.log(`Detected 2`)
        continue
    }
    if(i==5){
        console.log(`Detected 5`)
        break
    }
    console.log(`value of i: ${i}`)
    
}