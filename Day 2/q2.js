let str="                     my name is abhyanth                  "
len=str.length //this is used to find the length of the string
console.log("the length of the string is"+len)
i=str.indexOf("a")//gives the first appering index of a
console.log("index of a is a is "+i)
li=str.lastIndexOf("a");//give the last appering index of that element the second parameter is from where it should start finding
console.log(" last index of a is a is "+li)
s=str.search("abhyanth")
console.log("index of a is a is (using serch) "+s)
sl=str.slice(3,10)//returns string from start index to end index if the indexing in -ve then it counts from the last
console.log("slicing: "+sl)
ss=str.substring(2,5)//cannot accept -ve characters
console.log("substring:  "+ss)
sst=str.substr(5,8)//the second argumnet is the length of the string requried after it reaches the first argument poition
console.log("substr:  "+sst)
r=str.replace("abhyanth","harvey specter")//it replaves ans returns a new string 
console.log("replace :"+r)
upper=str.toUpperCase()
lower=str.toLowerCase()
console.log(upper ,lower)
cc=str.concat(r)//this is used to add 2 strings used insted of +
console.log(cc)
tr=str.trim()//removes all the white psaces from the start and the end
console.log(tr)
ca=str.charAt(22)//gives the  character present at that index
console.log(ca)
spp=tr.split(" ")//used to split based on that character
console.log(spp)
