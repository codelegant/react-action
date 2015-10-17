var Link=React.createClass({displayName: "Link",
	mixins:[React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {message:"Hello!"};
	},
	handleChange:function(e){
		var valueLink=this.linkState("message");
		valueLink.requestChange(e.target.value);
	},
	render:function(){
		return React.createElement("input", {type: "text", value: this.state.message, onChange: this.handleChange})
	}
});
React.render(
React.createElement(Link, null),
document.body
	)