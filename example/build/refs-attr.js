var App=React.createClass({displayName: "App",
	getInitialState:function() {
	    return {
	         userInput:""
	    };
	},
	handleChange:function(e){
		this.setState({userInput:e.target.value});
	},
	clearAndFocusInput:function(){
		this.setState({userInput:""},function(){
			this.refs.theInput.getDOMNode().focus();
		});
	},
	render: function() {
		return (
			React.createElement("div", null, 
 			  React.createElement("div", {onClick: this.clearAndFocusInput}, 
 			  	"Click to Focus and Rest"
 			  ), 
 			  React.createElement("input", {
 			  ref: "theInput", 
 			  value: this.state.userInput, 
 			  onChange: this.handleChange})
			)
		);
	}
});
React.render(
	React.createElement(App, null),
	document.getElementById('example')
	);