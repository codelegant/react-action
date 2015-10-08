var LinkText=React.createClass({
	getInitialState:function() {
	    return {isMe:true};
	},
	handleClick:function(){
		this.setState({isMe:!this.state.isMe});
	},
	render: function() {
		return (
			<div className="alert alert-info text-center" onClick={this.handleClick}>
			This links text is {this.state.isMe? "Me" : "not me"}
			</div>
		);
	}
});

React.render(
	<LinkText />,
	document.body
);