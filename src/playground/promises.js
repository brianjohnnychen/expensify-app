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
}).catch((error) => {
    console.log('error:', error)
})

console.log('after')