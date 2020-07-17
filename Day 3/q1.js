number=function (num) {
    if (num%2===0) {
        console.log(`The number enterred is: ${num} and its even`)
        
    } else {
        console.log(`The number enterred is: ${num} and its odd`)
        
    }
}
n=prompt("Please enter the number");
number(n)