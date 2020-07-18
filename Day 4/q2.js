const student={
    name:"helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using javascript"
    }
}
 var {name,age,projects,projects:{diceGame}} =student;
 console.log(name,age,projects,diceGame)
