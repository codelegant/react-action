var Box = React.createClass({
	getInitialState: function() {
		return {
			windowWidth: window.innerWidth
		};
	},
	handleResize: function(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},
	componentDidMount: function() {
		window.addEventListener("resize", this.handleResize);
	},
	componentWillUnmount: function() {
		window.removeEventListener("resize", this.handleResize);
	},
	render: function() {
		return (
			<div>Current window width:{this.state.windowWidth}</div>
		);
	}
});
React.render(<Box/>, document.body);
