console.log("destructuring js file")

const person = {
    name: "Brian",
    age: 28,
    location: {
        city: "Boston",
        temperature: 69
    }
}

console.log(`${person.name} is ${person.age} and from ${person.location.city}`)

// const name = person.name
// const age = person.age

const {name, age} = person // same as two lines above, gets values with same name from object. Array destructuring gets position instead of name.
console.log(`${name} is ${age}`)

// set Taipei as default fallback value for city
// rename temperature during destructuring and set default value
const {city = "Taipei", temperature: temp = 23} = person.location
console.log(`It's ${temp} degrees in ${city}`)

const book = {
    title: "How to say no.",
    author: "Jojo",
    publisher: {
        name: "Penguin"
    }
}

const {name: publisherName = "Self-Published"} = book.publisher
console.log(publisherName)

// Array destructuring:
const address = ['street name', 'city name', '02123']
console.log(address[2])

// Destructures based on position, leave blank to skip item.
const [street, , zip = "02169"] = address
console.log(`Street: ${street} in area code ${zip}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']
const [drink, , medium, large] = item
console.log(`A medium ${drink} costs ${medium}.`)