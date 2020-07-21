num=+prompt("Enter the limit: ")
arr=[]
for (let i = 0; i <=num; i++) {
    arr.push(i)
    
}
let ans =arr.filter(n=>n%2==1);
let f_ans=ans.map(n =>Math.pow(n,3))
console.log(f_ans)

