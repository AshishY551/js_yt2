const user ={
    username:"HARSHIT",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage();
user.username="sam";
user.welcomeMessage();

function chai(){
    let username="Hat"
    console.log(this)
    // console.log(this.username)  //undefined

}
chai()

// ARROW function      can't use this  but what else d/f?
const chai2= ()=>{
    let username="Hat"
    //console.log(this.username)  //undefined
    console.log(this)  //{}

}
chai2()

// M1
const add2=(num1,num2)=>{
    return num1+num2          //{}- need return 
}
console.log(add2(3,4))
// M2
//Arrow function ---Inplicit return
const add3=(num1,num2)=> num1+num2    
//or     m3    
const add4=(num1,num2)=> (num1+num2)     //()- no return needed
console.log(add3(3,7))


// Dealing with objects
const add5=(num1,num2)=> {username:"ankit"} 
console.log(add5(3,7))    //undefined
const add6=(num1,num2)=> ({username:"ankit"})
console.log(add6(3,7))    //{ username: 'ankit' }

const myarr=[2,4,5,7]
// myarr.forEach(Function (){})
myarr.forEach( ()=>{})
