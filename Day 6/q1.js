 const bag=document.getElementsByTagName("body")
console.log(bag)
count=0
function my_color(){
    arr=["red","green","orange","violet","purple","yellow","white","grey","brown"]
    
    bag[0].style.backgroundColor=arr[count]
    count +=1
    if(count==arr.length){
        count=0
    }
}
setInterval(my_color,5000);



