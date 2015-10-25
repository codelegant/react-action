"use strict";

var SetIntervalMixin = {
	componentWillMount: function componentWillMount() {
		this.intervals = [];
	},
	setInterval: (function (_setInterval) {
		function setInterval() {
			return _setInterval.apply(this, arguments);
		}

		setInterval.toString = function () {
			return _setInterval.toString();
		};

		return setInterval;
	})(function () {
		this.intervals.push(setInterval.apply(null, arguments));
	}),
	componentWillUnmount: function componentWillUnmount() {
		this.intervals.map(clearInterval);
	}
};

var TickTock = React.createClass({
	displayName: "TickTock",

	mixins: [SetIntervalMixin],
	getInitialState: function getInitialState() {
		return {
			seconds: 0
		};
	},
	componentDidMount: function componentDidMount() {
		this.setInterval(this.tick, 1000);
	},
	tick: function tick() {
		this.setState({ seconds: this.state.seconds + 1 });
	},
	render: function render() {
		return React.createElement(
			"p",
			null,
			"React has been running for ",
			this.state.seconds,
			" seconds."
		);
	}
});

React.render(React.createElement(TickTock, null), document.getElementById("example"));