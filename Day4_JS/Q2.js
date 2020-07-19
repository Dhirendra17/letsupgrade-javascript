console.log('Q2')
//Given Object is:
const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame : "Two player dice game using Javascript"
    }
}

//Destructuring  of the above object is
console.log('The destructuring is as:')
let {name,age,projects:{diceGame}} = student;
console.log(`Name is: ${name}`);
console.log(`Age is: ${age}`);
console.log(`Project is: ${diceGame}`)