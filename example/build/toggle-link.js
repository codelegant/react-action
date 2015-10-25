"use strict";

var LinkText = React.createClass({
	displayName: "LinkText",

	getInitialState: function getInitialState() {
		return { isMe: true };
	},
	handleClick: function handleClick() {
		this.setState({ isMe: !this.state.isMe });
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "alert alert-info text-center", onClick: this.handleClick },
			"This links text is ",
			this.state.isMe ? "Me" : "not me"
		);
	}
});

React.render(React.createElement(LinkText, null), document.body);