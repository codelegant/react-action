var LinkText=React.createClass({displayName: "LinkText",
	getInitialState:function() {
	    return {isMe:true};
	},
	handleClick:function(){
		this.setState({isMe:!this.state.isMe});
	},
	render: function() {
		return (
			React.createElement("div", {className: "alert alert-info text-center", onClick: this.handleClick}, 
			"This links text is ", this.state.isMe? "Me" : "not me"
			)
		);
	}
});

React.render(
	React.createElement(LinkText, null),
	document.body
);