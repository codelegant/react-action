var MyComponet=React.createClass({displayName: "MyComponet",
	handleClick:function(){
		this.refs.myTextInput.getDOMNode().focus();
		var nodes=this.getDOMNode().childNodes;
		for(var i=nodes.length;i--;i){
			if(nodes[i].tagName==="INPUT"){
			console.info(nodes[i]);
		}
		}
	},
	render: function() {
		return (
			React.createElement("div", null, 
			  React.createElement("input", {type: "text", ref: "myTextInput"}), 
			  React.createElement("button", {type: "button", onClick: this.handleClick}, "Foucs the text input")
			)
		);
	}
});
React.render(
	React.createElement(MyComponet, null),
	document.getElementById("example")
);