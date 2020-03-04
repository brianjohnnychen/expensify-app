// import path
const path = require('path')

// import express (below is node's method of importing)
const express = require('express')

// create an express application (make a new instance of express by calling it)
const app = express()

// construct path to the public folder
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000 // port if used on Heroku, use 3000 if not provided

// use public directory to serve up static assets
app.use(express.static(publicPath))

// set up function to run when someone sends a GET request to our server,
// if what is requested is not in public folder just send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// start up the server and listen on a specific port
app.listen(port, () => {
    console.log('Server is up!')
})
