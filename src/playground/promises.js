const promise = new Promise((resolve, reject) => {
    // set timeout for 1.5 seconds
    setTimeout(() => {
        // What to do when promise is resolved, can only return 1 variable or object.
        // resolve('This is my resolved data.')
        reject('Something went wrong')
    }, 1500)
    console.log('before')
})

// If promise is resolved and provides data, then dump data to the console. If not resolved, then catch.
promise.then((data) => {
    console.log(data)
    return 'some data'
}).then((str) => {
    // promise chaining
    console.log('This runs after if promise resolved. Return data can be passed from above.', str)
}).catch((error) => {
    console.log('error:', error)
})

console.log('after')