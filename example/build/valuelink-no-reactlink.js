"use strict";

var Link = React.createClass({
	displayName: "Link",

	getInitialState: function getInitialState() {
		return { message: "Hello!" };
	},
	handleChange: function handleChange(newValue) {
		this.setState({ message: newValue });
	},
	render: function render() {
		var valueLink = {
			value: this.state.message,
			requestChange: this.handleChange
		};
		return React.createElement("input", { type: "text", valueLink: valueLink });
	}
});

React.render(React.createElement(Link, null), document.body);