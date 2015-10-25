"use strict";

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			userInput: ""
		};
	},
	handleChange: function handleChange(e) {
		this.setState({ userInput: e.target.value });
	},
	clearAndFocusInput: function clearAndFocusInput() {
		this.setState({ userInput: "" }, function () {
			this.refs.theInput.getDOMNode().focus();
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ onClick: this.clearAndFocusInput },
				"Click to Focus and Rest"
			),
			React.createElement("input", {
				ref: "theInput",
				value: this.state.userInput,
				onChange: this.handleChange })
		);
	}
});
React.render(React.createElement(App, null), document.getElementById('example'));