var App=React.createClass({
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
			<div>
 			  <div onClick={this.clearAndFocusInput}>
 			  	Click to Focus and Rest
 			  </div>
 			  <input
 			  ref="theInput"
 			  value={this.state.userInput}
 			  onChange={this.handleChange} />
			</div>
		);
	}
});
React.render(
	<App/>,
	document.getElementById('example')
	);