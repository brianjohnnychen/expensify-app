import {createStore, combineReducers} from 'redux'

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'text':
            return {
                
            }
        case 'date':
            return {
                
            }
        case 'startDate':
            return {
                
            }
        case 'endDate':
            return {
                
            }
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
    })
)
console.log(store.getState())

const demoStore = {
    expenses: [{
        id: "Brian",
        description: "for coffee",
        note: "double shot latte",
        amount: 545,
        createdAt: 0
    }],
    filters: {
        text: "test",
        sortBy: "date / amount",
        startDate: undefined,
        endDate: undefined
    }
}