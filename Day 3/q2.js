n=prompt("Enter the name of the operating system: ")


if (n!==null && n!=="") {
    n=n.toUpperCase()
    l=n.split(" ")
    console.log(`the name of the OS is ${l[0]} and version is ${l[1]} `)
    
}
else {
    console.log("Please refresh the screen and try again")
}