"use strict";

var Box = React.createClass({
	displayName: "Box",

	getInitialState: function getInitialState() {
		return {
			windowWidth: window.innerWidth
		};
	},
	handleResize: function handleResize(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},
	componentDidMount: function componentDidMount() {
		var _this = this;
		if ("\v" === "v") {
			window.attachEvent("onresize", (function (event) {
				return _this.handleResize.bind(this, event);
			}).bind(_this));
		} else {
			window.addEventListener("resize", this.handleResize);
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		//window.removeEventListener("resize", this.handleResize);
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			" Current window width: ",
			this.state.windowWidth,
			" "
		);
	}
});
React.render(React.createElement(Box, null), document.body);