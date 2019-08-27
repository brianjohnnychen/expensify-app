"use strict";

var bodyText = {
    text: "I am now visible (default)",
    isVisible: true
};

var toggleVisibility = function toggleVisibility() {
    if (bodyText.isVisible) {
        bodyText.isVisible = false;
        bodyText.text = "";
    } else {
        bodyText.isVisible = true;
        bodyText.text = "I am now visible (set by button)";
    }
    renderApp();
};

var appRoot = document.getElementById("app");
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            bodyText.isVisible ? "Hide content" : "Show content"
        ),
        React.createElement(
            "p",
            null,
            bodyText.text
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
