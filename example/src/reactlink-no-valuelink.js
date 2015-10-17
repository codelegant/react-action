var Link=React.createClass({
	mixins:[React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {message:"Hello!"};
	},
	handleChange:function(e){
		var valueLink=this.linkState("message");
		valueLink.requestChange(e.target.value);
	},
	render:function(){
		return <input type="text" value={this.state.message} onChange={this.handleChange} />
	}
});
React.render(
<Link />,
document.body
	)