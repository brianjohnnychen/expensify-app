const bodyText = {
    text: "I am now visible (default)",
    isVisible: true
}

const toggleVisibility = () => {
    if(bodyText.isVisible) {
        bodyText.isVisible = false
        bodyText.text = ""
    } else {
        bodyText.isVisible = true
        bodyText.text = "I am now visible (set by button)"
    }
    renderApp()
}

const appRoot = document.getElementById("app")
const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{bodyText.isVisible ? "Hide content" : "Show content"}</button>
            <p>{bodyText.text}</p>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
renderApp()
