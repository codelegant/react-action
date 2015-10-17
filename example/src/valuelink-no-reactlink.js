var Link=React.createClass({
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
			<input type="text" valueLink={valueLink} />
		);
	}
});

React.render(
<Link />,
document.body
	);