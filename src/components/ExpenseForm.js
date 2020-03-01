import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        // If expense exists, fill form when clicked in to modify, else create with blank property values.
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // Get timestamp when created.
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        // Use REGEX to limit input field to only numbers and to two decimal points.
        // If there is no amount, or the amount provided is a match, set the amount.
        // The OR here allows the input area to be cleared.
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        // Prevent user from being able to clear date value.
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    // Selects current date by default.
    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused })
    }

    onSubmit = (e) => {
        e.preventDefault() // Prevent full page refresh.

        if(!this.state.description || !this.state.amount) {
            // Set error state if missing description or amount.
            this.setState(() => ({ error: "Please enter a proper description and amount." }))
        } else {
            // Clear the error.
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : ''}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    
                    <textarea
                        placeholder="Add an expense note for your expense. (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    
                    <button>Add Expense</button>

                </form>
            </div>
        )
    }
}