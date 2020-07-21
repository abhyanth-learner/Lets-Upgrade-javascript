class User{
    constructor(name,age,email) {
        this.name = name
        this.age = age
        this.email = email
        this.lucoins=0
        this.course=[]
    }
    login() {
        console.log(`${this.name} has logged in`);
        return this
    }
    logout() {
    console.log(`${this.name} has logged out`)
    return this

    }
    display(user){
        console.log(`The name of the student is ${user.name} 
        His email-id is ${user.email} 
        Number of Lu-coins he has is ${user.lucoins} 
        The coueses he has enrolled in are${user.course}  `)
    }
}
class Moderator extends User {
    addcoins(user){
        user.lucoins +=1
            return this
    }

} 
class  Admin extends Moderator {
    addcourse(user,course){
        user.course.push(course)
    }
    removecourse(user,course){
        user.course.pop(course)
    }

} 
user1= new User("abhi",21,"a2@gmail.com")
user2= new User("ambi",22,"a3@gmail.com")
user3= new User("ashu",23,"a4@gmail.com")
user4= new User("rakesh",24,"a1@gmail.com")
let mod=new Moderator("abhyanth",20,"a@gmail.com")
let admin = new Admin("prasad",25,"p@gmail.com")
admin.addcourse(user1,"javascript")
mod.addcoins(user1)
mod.addcoins(user1)
mod.addcoins(user1)
mod.addcoins(user1)
mod.addcoins(user4)
mod.addcoins(user4)
mod.addcoins(user4)
mod.addcoins(user4)
mod.addcoins(user4)
mod.addcoins(user2)
admin.addcourse(user1,"python")
admin.addcourse(user2,"python")
admin.addcourse(user3,"python")
admin.addcourse(user4,"python")
admin.display(user1)






