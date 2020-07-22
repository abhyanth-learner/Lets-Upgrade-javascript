num=+prompt("Enter the number:",1)
h=document.getElementById("heading")
h.innerText += `The table of ${num} is: \n`
t=document.getElementsByClassName("table")
for (let i = 1;  i<=10; i++) {
    t[0].innerText +=`${num} X ${i}=${num*i} \n`
    
}