class IndecisionApp extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        )
    }
}
class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render() {
        return(
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                <ol>
                    <li>option one</li>
                    <li>option two</li>
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return(
            <div>
                Add Option Component Here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))

// React Component must have upper-case starting letter for name 
// - helps React differentiate between component and html element.