// const usermail="got@gmail.com"  //got user mail
// const usermail=""  //Don't have user mail
const usermail=[]  //Don't have user mail

if(usermail){
    console.log("got user mail")
}else{
    console.log("Don't have user mail")
}

//[1.Falsy values]-8
// false , 0 , -0 , BigInt 0n , "" (empty string) , null , undefinrd , NaN****

//[1.Thruthy values]-all except falsy -some examples:
// "0" , 'false' , " " (space in string) ,  [] -array , {} (Object) , function(){} -(empty function)

//************************ */
if(false==0){
    console.log("false==0")
}
if(false==""){
    console.log("false==")
}
if(0==""){
    console.log("0==")
}

//**check empty array  -{by length}
if (usermail.length ===0){
    console.log("Array is empty")  //Array is empty
}
//**check empty object  -{by keys}
const emptyobj={}
if (Object.keys(emptyobj).length ===0){
    console.log("object is empty")  //object is empty
}

// ***Nullish Coalescing Operator [(??): null or undefined]
let val1;
// val1=5??10    //op-5
val1=null??10    //op-10
val1=undefined??15  //op-15
val1=null??undefined??25  //op-25
console.log(val1)

/***Ternary Operator
   Condition ? true : false */
const teaprice=200
teaprice<=80 ? console.log("less than 80") : console.log("more than 80")

// Lecture26 last 4min revision