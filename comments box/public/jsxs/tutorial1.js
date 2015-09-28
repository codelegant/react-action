"use strict";

var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			"Hello, world!I am a CommentBox. "
		);
	}
});
React.render(React.createElement(CommentBox, null), document.getElementById('content'));