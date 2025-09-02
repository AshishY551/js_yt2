const score=400
// console.log(score)
const balance=new Number(100)    // Go on **inspect/console check prototype methods 
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber1=23.8966
const otherNumber2=123.8966
// console.log(otherNumber1.toPrecision(3))
// console.log(otherNumber1.toPrecision(8));
// console.log(otherNumber2.toPrecision(3));

const hundreads=10000000
// console.log(hundreads.toLocaleString());
// console.log(hundreads.toLocaleString('en-IN'));


// Go on **inspect/console check prototype methods    Number,string,Math

//  +++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++
// maths library is by default in js

// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.abs(4))
// console.log(Math.round(4.4))
// console.log(Math.round(4.9))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

console.log(Math.sqrt(-4))
console.log(Math.sqrt(4))
console.log(Math.max(2,3,4,5,7))
console.log(Math.min(2,3,4,6))

console.log(Math.random())  // always b/w 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.random()*(max-min +1))
console.log(Math.floor(Math.random()*(max-min +1)))

console.log(Math.floor(Math.random()*(max-min +1))+min)    // * imp


