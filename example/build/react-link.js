var WithLink=React.createClass({displayName: "WithLink",
	mixins:[React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {message:"Hello"};
	},
	render:function(){
		return React.createElement("input", {type: "text", valueLink: this.linkState("message")});
	}
});



React.render(
	React.createElement(WithLink, null),
	document.body
	);