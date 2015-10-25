"use strict";

var WithLink = React.createClass({
	displayName: "WithLink",

	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function getInitialState() {
		return { message: "Hello" };
	},
	render: function render() {
		return React.createElement("input", { type: "text", valueLink: this.linkState("message") });
	}
});

React.render(React.createElement(WithLink, null), document.body);