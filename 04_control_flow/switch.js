// switch(key)
// {
//     case value:
//         break;
//         default:
//         break;
// }
const month = 3
switch (month) {
    case 1:
        console.log("Jnauary");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
         break;
    case 4:
        console.log("april");
        break;
//note:after matching the condition it execute and agter the break it not execute except default case

    default:
        console.log("default case match")
        break;
}
// if you write string in condition
const months = "apr"
switch (months) {
    case "jan":
        console.log("Jnauary");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "mar":
        console.log("march");
         break;
    case "apr":
        console.log("april");
        break;
        default:
            console.log("default case match")
            break;
    }