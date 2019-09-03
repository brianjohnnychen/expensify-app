class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer."
        const options = ["Thing one", "Thing two", "Thing four"]

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handleClick() {
        alert("clicked")
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)

        // This binds the "this" context so whereever we call handleRemoveAll() - the "this" context will be correct.
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        alert("handled remove all")
    }

    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim

        if(option) {
            alert(option)
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))

// React Component must have upper-case starting letter for name 
// - helps React differentiate between component and html element.