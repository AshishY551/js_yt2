// Array

const arr=[0,1,2,3,4,5,true,"Harshit"];
const arr2=new Array(0,1,2,3,4,5)
//Array in js- Mixed,resizable 
//* Js Array-COPY operation = create SHALLOW copies 

////(Shallow copy-share same reference )////// (vs) /// (Deep copy-share d/f reference)

// console.log(arr);
// console.log(arr[6]);
// console.log(arr2);

// Array methods
// arr2.push(6);
// arr2.push(7);
// arr2.pop();

////* arr2.unshift(9); // optimisation problem
// arr2.shift();

// console.log(arr2.includes(8));
// console.log(arr2.indexOf(9));
// console.log(arr2.indexOf(4));

console.log(arr2);

let myarr=arr2.join(arr);
// console.log(myarr);
// console.log(typeof myarr);

//*?? Slice vs Splice
// console.log("A  " +  arr2);
console.log("A  " ,  arr2);
const myn1=arr2.slice(1,3);

console.log(myn1)
console.log("B  ", arr2);
const myn2=arr2.splice(1,3);  ////***** Range included,,, Remove elements from original array */
console.log(myn2)
console.log("C  ",arr2)




