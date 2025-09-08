//Immediately Involked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()   //DB CONNECTED

(function chai(){
    console.log(`DB CONNECTED`)
})();    //DB CONNECTED

//[problem----- IIFE DOn't know where to end]***  so ";" after fuctioncall id=s must


//syntex  ()()  
//(function in block)(immediate execute)


//answer -- IIFE  
// Interview selection --[IIFE use?] **to remove Pollution due to Global scope variables/methods** etc


//problem----- IIFE DOn't know where to end
// (()=>{
//     console.log(`db connected`)
// })()

//[1.Named IIFE]
(function auto(){     //(intermediate value)(...) is not a function
    console.log(`db connected`)
})();

//[2.unNamed IIfe]
((name)=>{
    console.log(`db connected ${name}`)
})("rahul");
