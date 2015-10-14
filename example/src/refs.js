// var App=React.createClass({
// 	getInitialState:function(){
// 		return {userInput:""};
// 	},
// 	handleChange:function(e){
// 		this.setState({userInput:e.target.value});
// 	},
// 	clearAndFocusInput:function(){
// 		this.setState({userInput:" "});
// 	},
// 	render: function() {
//       return (
//         <div>
//           <button type="button" onClick={this.clearAndFocusInput}> Click to Focus and Reset </button>
//           <input
//             value={this.state.userInput}
//             onChange={this.handleChange} />
//         </div>
//       );
//     }
// });

var Input=React.createClass({
	render: function() {
		var myInput=<input name="good" />;
		this.rememberThisInput=myInput;
		return(
			<div>
				<div>{this.rememberThisInput}</div>
				{myInput}
			</div>
		)
	}
});
React.render(
	<Input />,
	document.getElementById("example")
);