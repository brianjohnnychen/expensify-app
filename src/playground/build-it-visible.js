class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Visibility Toggle",
            visible: false
        }

        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility(props) {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>Toggle Visibility</button>
                <p>{this.state.visible ? "Visibility On" : ""}</p>
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"))

// const bodyText = {
//     text: "I am now visible (default)",
//     isVisible: true
// }

// const toggleVisibility = () => {
//     if(bodyText.isVisible) {
//         bodyText.isVisible = false
//         bodyText.text = ""
//     } else {
//         bodyText.isVisible = true
//         bodyText.text = "I am now visible (set by button)"
//     }
//     renderApp()
// }

// const appRoot = document.getElementById("app")
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{bodyText.isVisible ? "Hide content" : "Show content"}</button>
//             <p>{bodyText.text}</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }
// renderApp()
