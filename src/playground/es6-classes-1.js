class Person {
    constructor(name = "Anoynmous", age = "0") {
        this.name = name
        this.age = age
    }
    getDescription() {
        // return "Hello " + this.name
        // Backticks create template strings.
        return `Hello, this is ${this.name}! I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor) {
            description += ` My major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        this.hasHomeLocation ? true: false
    }
    getDescription() {
        let description = super.getDescription()
        if(this.hasHomeLocation) {
            description += ` I am from ${this.homeLocation}`
        }
        return description
    }
}

const me = new Student("Brian Chen", 27, "CSE")
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

const traveler = new Traveler("Elaine", 28, "Tainan")
console.log(traveler.getDescription())