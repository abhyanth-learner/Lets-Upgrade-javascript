 op=prompt("enter the operation you want to perform  give a space number space another number eg:addition 4 5 for sqroot only one number and power its num1 raised to num2" );//enter the input as operation space numbers
l=op.split(" ")
switch (true) {
    case (l[0]=="addition"):
        ans=parseFloat(l[1])+parseFloat (l[2]); 
        break;
    case (l[0]=="subtraction"):
        ans=parseFloat(l[1])-parseFloat (l[2]); 
        break;
    case (l[0]=="multiplication"):
        ans=parseFloat(l[1])*parseFloat (l[2]); 
        break;
    case (l[0]=="sub"):
        ans=parseFloat(l[1])/parseFloat (l[2]); 
        break;
    case (l[0]=="root"):
        ans=Math.sqrt(parseFloat(l[1]));
        break;
    case (l[0]=="power"):
        ans=Math.pow(parseFloat(l[1]),parseFloat (l[2])); 
        break;           
    default:
        ans=("refresh read the instruction and retype")
        break;
}
console.log("The answer is:"+ans)

