class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const chosen = this.state.options[randomNum]
        alert(chosen)
        console.log(randomNum)
        return {

        }
    }

    handleAddOption(option) {
        // Run only if option is an empty string.
        if(!option) {
            return "Enter valid value to add item."
        } else if(this.state.options.indexOf(option) > -1) {
            // Check if option already in the array.
            return "This option already exists."
        } else {
            this.setState((prevState) => {
                return {
                    // Use concat instead of push to return a new array instead of modifying state contents directly.
                    options: prevState.options.concat([option])
                }
            })
        }
        // This function will get "undefined" back if everything went properly b/c nothing is explicitly returned.
        // If something is returned, then it means an error occured. The status of the return value can be passed to child function for action.
    }

    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer."

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// class Header extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

// class Action extends React.Component{
//     render() {
//         return(
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    )
}

// class Options extends React.Component {
//     constructor(props) {
//         super(props)

//         // This binds the "this" context so whereever we call handleRemoveAll() - the "this" context will be correct.
//         // this.handleRemoveAll = this.handleRemoveAll.bind(this)
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return(
        <div>
            Option: {props.optionText}
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return(
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return {
                // Set state's error property to the error if error is now defined.
                error: error
            }
        })
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// Stateless functions and arrow functions do not have access to "this". To access props, pass in as argument.
// Because name of User is uppercase, React will know to render it as a component rather than an HTML element.
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))

// React Component must have upper-case starting letter for name 
// - helps React differentiate between component and html element.