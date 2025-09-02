// Date 

let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

// console.log(typeof (myDate));  // Date is an object

let myCreatedDate=new Date(2025,0,24);  // Month start from * 0 here
console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2025,0,24,5,3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2=new Date("2025-01-25");   // Month start from * 1 here   // Indian format = yy mm dd
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3=new Date("01-14-2025");   // Month start from * 1 here   // International format = mm dd yy
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp=Date.now();  //**** */
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate2=new Date();
// console.log(newDate2.getDate());
// console.log(newDate2.getDay());
// console.log(newDate2.getFullYear());
// console.log(newDate2.getHours());
// console.log(newDate2.getMonth() + " Month in js");
// console.log(newDate2.getMonth() +1+" Actual month");
// console.log(newDate2.getMinutes());

// `${newDate2.getMinutes()} and the datetime`

newDate2.toLocaleString("default",{
// ctrl+space = all methods 
 weekday:"long",
 timeZoneName:"longGeneric"
})




