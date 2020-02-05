import {createStore} from 'redux'

// Action generators - functions that return action objects.
// Object destructure incrementBy: take the incrementBy property from the argument passed in and set it to 1 by default unless otherwise specified.
const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setTo} = {}) => ({
    type: 'SET',
    setTo
})

const resetCount = () => ({type: 'RESET'})

// Reducer
// 1. Reducers are pure functions: does not use or change values outside its scope.
// 2. Reducers do not change state or action.
const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setTo
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

// createStore takes a function and calls it right away once.
// createStore then gets called each time an action is dispatched.
const store = createStore(countReducer)

// Subscribe function gets called everytime the store changes.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

console.log("redux-101")

// Increment command using action objects.
store.dispatch(incrementCount({incrementBy: 13}))
store.dispatch(decrementCount({decrementBy: 12}))
store.dispatch(setCount({setTo: 69}))
store.dispatch(resetCount())

// *Action - an object that gets sent to the store.

// // Send the increment object off to the store.
// store.dispatch(
//     // Object to increment the count. CAPSLOCK is convention for action-typed names. Use underscore for multiple words.
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// )

// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decrementBy: 5
//     }
// )

// store.dispatch(
//     {
//         type: 'DECREMENT'
//     }
// )

// // Reset the count to zero.
// store.dispatch(
//     {type: 'RESET'}
// )

// store.dispatch(
//     {
//         type: 'SET',
//         count: 101
//     }
// )