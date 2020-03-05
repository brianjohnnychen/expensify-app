// takes all of the named exports from 'firebase' and puts them on a new variable named firebase
// can then access all the named exports using firebase.function()
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAFjH8kW34kRmVvv3MsDYu6pN6o8jQM3vc",
    authDomain: "expensify-82443.firebaseapp.com",
    databaseURL: "https://expensify-82443.firebaseio.com",
    projectId: "expensify-82443",
    storageBucket: "expensify-82443.appspot.com",
    messagingSenderId: "365745866313",
    appId: "1:365745866313:web:c6e26a5e2019816916a198",
    measurementId: "G-E23FYDYSX5"
}
  
// Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_added - will fire one time for existing data at the location
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// // subscribe to our array-based data
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         // iterate over all the snapshots and create a new array
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             // iterate over all the snapshots and create a new array
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref().set(null)

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 1234567
// })

// // push() will create a new property on the reference with an unique id
// database.ref('notes').push({
//     title: 'to-do',
//     body: 'go for a run'
// })

// // on() subscribes to database and retrieves data each time data is changed. Unsubscribe with off().
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// unsubscribe
// database.ref().off(onValueChange)

// // fetch data from firebase, can reference specific object or leave blank to retrieve all
// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((error) => {
//         console.log('Error fetching data.', error)
// })

// // get a reference to root of database then set the reference
// database.ref().set({
//     name: 'Brian Chen',
//     age: 28,
//     isSingle: true,
//     location: {
//         city: 'Boston',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved.')
// }).catch((error) => {
//     console.log('This failed.', error)
// })

// // update multiple things together at the root level, will not affect other root level fields but will affect nested values
// // use 'attribute/nested' to change nested attributes without affecting other nested attributes
// database.ref().update({
//     name: 'JoJo',
//     age: 30,
//     job: 'maid',
//     isSingle: null,
//     'location/city': 'Qin Huang Dao'
// })

// // add new data to existing database
// database.ref('attributes').set({
//     height: '6.0 ft',
//     weight: '100 kg'
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((error) => {
//     console.log('Things did not work for the second error:', error)
// })

// // delete data from database, can also call set(null) instead of remove()
// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle attribute removed.')
// }).catch((error) => {
//     console.log('Error removing isSingle attribute.', error)
// })

// pass in reference to age property, if ref() is left blank, will rewrite entire database
// database.ref().set('This is my data.')
// database.ref('age').set(60)

// pass in nested values
// database.ref('location/city').set('Providence')

// database.ref('attributes/height').set('6.0 ft')
// database.ref('attributes/weight').set('100 kg')