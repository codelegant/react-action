var Link=React.createClass({displayName: "Link",
	getInitialState:function(){
		return {message:"Hello!"};
	},
	handleChange:function(newValue){
		this.setState({message:newValue});
	},
	render: function() {
		var valueLink={
			value:this.state.message,
			requestChange:this.handleChange
		}
		return (
			React.createElement("input", {type: "text", valueLink: valueLink})
		);
	}
});

React.render(
React.createElement(Link, null),
document.body
	);