// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}
console.log(add(55, 1, 111))

// this keyword - no longer bound with arrow functions
// this keyword context in arrow function is inherited from parent
const user = {
    name: "Brian",
    cities: ["Boston", "Kaohsiung", "Taichung"],
    
    // cannot use arrow function on printPlacesLived b/c this context will come from parent(the user object) and is out of scope
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city + "!")
            // "forEach" just lets you do something with each item e.g. print it to the screen
            // "map" can transform each item and get a new array back
            // can transform the item such as adding "!" to each item in the array
        // "this" is not accessible down below directly
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city)
        // })
    }
}
console.log(user.printPlacesLived())

// Challenge area
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply())