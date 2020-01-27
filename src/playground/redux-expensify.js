import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': {
            return [...state, action.expense]
        }
        case 'REMOVE_EXPENSE': {
            // return [...state, action.expense].filter(action.expense.id)
            return state.filter(({id}) => {
                return id !== action.id
            })
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        }
        default:
            return state;
    }
}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                startDate: action.endDate
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

store.subscribe(() => {
    console.log(store.getState())
})

// const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
// const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 200}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// store.dispatch(setTextFilter('new filter text'))

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))
store.dispatch(setEndDate())

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