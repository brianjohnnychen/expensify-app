"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // })

            // This line is same as above. {} is usually an object but when used in arrow functions, it is evaluated as the function body.
            // To have arrow function return an object, put brackets around the curly braces: ({This is an object})
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        // Filter here will return all options[] elements not equal to the option to remove.
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var chosen = this.state.options[randomNum];
            alert(chosen);
            console.log(randomNum);
            return {};
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            // Run only if option is an empty string.
            if (!option) {
                return "Enter valid value to add item.";
            } else if (this.state.options.indexOf(option) > -1) {
                // Check if option already in the array.
                return "This option already exists.";
            } else {
                // Use concat instead of push to return a new array instead of modifying state contents directly.
                this.setState(function (prevState) {
                    return { options: prevState.options.concat([option]) };
                });
            }
            // This function will get "undefined" back if everything went properly b/c nothing is explicitly returned.
            // If something is returned, then it means an error occured. The status of the return value can be passed to child function for action.
        }
    }, {
        key: "render",
        value: function render() {
            var subtitle = "Put your life in the hands of a computer.";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

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

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText,
        React.createElement(
            "button",
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            "remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(IndecisionApp, { options: ["Uni", "Oreo"] }), document.getElementById("app"));

// React Component must have upper-case starting letter for name 
// - helps React differentiate between component and html element.
