import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

// Provide a named export to test an unconnected version to pass in values
// dynamically rather than use values in store.
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        // Show the filtered expenses
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)