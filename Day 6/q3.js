h=document.getElementById("welcome")
d=document.getElementById("date")
b=document.getElementById("shift")
wel=prompt("enter your name","XYZ")
wel=wel.toUpperCase()
h.innerText = `Hello Welcome to our page ${wel}`
get_time=()=>{
    t= new Date()
time=t.toLocaleTimeString()
d.innerText = `TIME: ${time}`
}
 setInterval(get_time,1000)
 var element = document.body;
//  function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
b.onclick=()=> {
    element.classList.toggle("dark-mode")
}


