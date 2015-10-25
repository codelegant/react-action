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

"use strict";

var Input = React.createClass({
	displayName: "Input",

	render: function render() {
		var myInput = React.createElement("input", { name: "good" });
		this.rememberThisInput = myInput;
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				this.rememberThisInput
			),
			myInput
		);
	}
});
React.render(React.createElement(Input, null), document.getElementById("example"));