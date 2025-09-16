// Control Flow/ Logic Control
/*
<,>,<=,>=,  
!=
=  -assignment operator
==  comparision(true /false)
=== Equivalent{Type**** CHeck also} 
!==  sign check
*/
if(true){
//code run
}
if(false){
//code Not run
}
if(2=="2"){//true
    console.log("executed")
}
if(2==="2"){//false
    console.log("executed")
}
if(2!=3){//true
    console.log("executed")
}
if(-3!==3){//true
    console.log("executed1")
}

const temp=44;
if(temp<50){
    console.log("temp < 50")
}else{
    console.log("temp > 50")
}

const score=200;
if(score>100){
    const power="fly";  //const or let
    console.log(`power:${power}`);// power:fly
}
// console.log(`power:${power}`);  // power is not defined
//problem with *****var
if(score>100){
    var power="fly";
    console.log(`power:${power}`);// power:fly
}
console.log(`power:${power}`);  // power is not defined

const balance=1000;
// inline scope
if(balance>500) console.log("test");
// or
if(balance>500) console.log("test"),console.log('test2');//unreadable-don't use
/*
if(balance<1000){
    console.log("bal<1000")    
}else if(balance<750){
    console.log("bal<500")
}else if(balance<500){
    console.log("bal<750")
}else{
    console.log("bal<900")
}   */

const userlogin=true
const debitcard=true
const logviaGoogle=false
const logviamailid=true
if (userlogin && debitcard && true){
    console.log("allow user")
}
if (userlogin || debitcard || false){
    console.log("allow user")
}