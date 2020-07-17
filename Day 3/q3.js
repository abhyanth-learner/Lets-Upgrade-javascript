marks=+prompt("Enter your marks:")
// if (marks>=85 && marks<=100) {
//     console.log(`the marks you have secured is ${marks} and you have got  A grade`)
    
// } 
// else if (marks>=70 && marks<85){
//     console.log(`the marks you have secured is ${marks} and you have got  B grade`)
// }
// else if (marks>=60 && marks<70){
//     console.log(`the marks you have secured is ${marks} and you have got  C grade`)
// }
// else if (marks>=50 && marks<60){
//     console.log(`the marks you have secured is ${marks} and you have got  D grade`)
// }
// else if (marks>=40 && marks<50){
//     console.log(`the marks you have secured is ${marks} and you have got  E grade`)
// }
// else if(marks==0){
//     console.log(`refresh and re-enter`)
// }
// else {
//     console.log(`the marks you have secured is ${marks} and you have got  F grade`)    
// }

//using switch case
switch (true) {
    case (marks>=85 && marks<=100):
    console.log(`the marks you have secured is ${marks} and you have got  A grade`)        
        break;
    case (marks>=70 && marks<85):
        console.log(`the marks you have secured is ${marks} and you have got  B grade`) 
        break;
    case (marks>=60 && marks<70):
        console.log(`the marks you have secured is ${marks} and you have got  C grade`) 
        break;
    case (marks>=50 && marks<60):
        console.log(`the marks you have secured is ${marks} and you have got  D grade`) 
        break;
    case (marks>=40 && marks<50):
        console.log(`the marks you have secured is ${marks} and you have got  E grade`) 
        break;
    case (marks===0):
        console.log(`refresh and re-enter`) 
        break;
    default:
        console.log(`the marks you have secured is ${marks} and you have got  E grade ${typeof(marks)}`)
        break;
}