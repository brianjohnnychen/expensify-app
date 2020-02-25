import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

// removeExpense
test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"})

    // objects cannot be compared with ===, or toBe;
    // to compare objects, use toEqual;
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// editExpense
test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "new note" })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    })
})

// addExpense
test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: 'rent',
        amount: 1500,
        createdAt: 1000,
        note: 'this was last month\'s rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("should setup add expense action object with default values", () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})