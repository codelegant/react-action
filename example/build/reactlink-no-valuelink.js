"use strict";

var Link = React.createClass({
	displayName: "Link",

	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function getInitialState() {
		return { message: "Hello!" };
	},
	handleChange: function handleChange(e) {
		var valueLink = this.linkState("message");
		valueLink.requestChange(e.target.value);
	},
	render: function render() {
		return React.createElement("input", { type: "text", value: this.state.message, onChange: this.handleChange });
	}
});
React.render(React.createElement(Link, null), document.body);