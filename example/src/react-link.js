var WithLink=React.createClass({
	mixins:[React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {message:"Hello"};
	},
	render:function(){
		return <input type="text" valueLink={this.linkState("message")} />;
	}
});



React.render(
	<WithLink />,
	document.body
	);