"use strict";

var ComnentBox = React.createClass({
	displayName: "ComnentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			"Hello,worl!I am a ComnentBox."
		);
	}
});