var nameVar = "Andrew"
var nameVar = "Mike"
// Problem with "var" - can not only reassign but can also redefine.
// "var" is function scoped (cannot access from outside function if declared inside)
console.log("nameVar", nameVar)

let nameLet = "Jen"
nameLet = "Brian"
// let nameLet = "Jojo"
// let cannot be redefined, but can be reassigned
console.log("nameLet", nameLet)

const nameConst = "Oreo"
console.log("nameConst", nameConst)
// const cannot be redefined or reassigned

// Use "const" by default and use "let" when changes are necessary
// Never use "var" anymore after ES6
// Let and Const are also function scoped
// Let and Const are also "Block-level scoped"

// Block scoping
/* Blocked scope are not only bound to functions but also to code blocks (e.g. for loop, if statement) */
var fullName = "Brian Chen"

if(fullName) {
    var lastName = fullName.split(" ")[1]
    console.log(lastName)
}
console.log(lastName) // Will error if lastName is defined with Const, Let

