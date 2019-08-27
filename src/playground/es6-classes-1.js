class Person {
    constructor(name = "Anoynmous", age = "0") {
        this.name = name
        this.age = age
    }
    getGreeting() {
        // return "Hello " + this.name
        // Backticks create template strings.
        return `Hello, this is ${this.name}!`
    }
    getDescription() {
        return ` I am ${this.age} years old.`
    }
}

const me = new Person("Brian Chen", 27)
console.log(me.getGreeting())
const you = new Person("", 18)
console.log(you.getGreeting)
console.log(you.getGreeting() + you.getDescription())