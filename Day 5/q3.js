async function todo_list(){
    const response= await fetch('http://jsonplaceholder.typicode.com/todos');
    const data=await response.json()
    console.log(data)
}
todo_list()
