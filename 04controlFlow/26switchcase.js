// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month=3
switch (month) {
    case 1:
        console.log("Jan") 
        break;
    case 2:
        console.log("fab")
        break;
    case 3:
            console.log("March")
            // break;    op-March
                         // april             
            //                   //if break not given
                            // **[[[switch- once condition matched ,then *executes* all conditions except defaut]]]
                break;//op-march
    default:
        console.log("april")
        break;
}
const month2="march"
switch (month2) {
    case "jan":
        console.log("Jan") 
        break;
    case "fab":
        console.log("fab")
        break;
    case "March":
            console.log("March")
                break;
    default:
        console.log("april")
        break;//op-april
}