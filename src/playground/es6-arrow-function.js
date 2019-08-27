const square = function (x) {
    return x*x
}

console.log(square(5))

// All arrow functions are anonymous - need to assign to a variable.
const cube = (x) => {
    return x*x*x
}
console.log(cube(5))

// Can use arrow functions w/o brackets if only 1 expression output
const squareArrow = (x) => x * x
console.log(squareArrow(6))

const getFirstName = (props) => {
    return props.split(" ")[0]
}

const getLastName = (props) => props.split(" ")[1]

console.log(getFirstName("Ariel Elaine"))
console.log(getLastName("Ariel Elaine"))