s=+prompt("Enter the number of sales ")
if (s>0 && s<=5000){
    ans=s*0.02
}
else if (s>5000 && s<=10000){
    ans=(5000*0.02)+(s*0.05)
   }
   else if (s>10000 && s<=20000){
    ans=(5000*0.02)+(10000*0.05)+(s*0/07)
   }
   else{
       ans=(5000*0.02)+(10000*0.05)+(20000*0/07)+(s*0.1)

   }
   console.log("The total commission is: "+ans)
