var MyComponet=React.createClass({
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
			<div>
			  <input type="text" ref="myTextInput"/>
			  <button type="button" onClick={this.handleClick} >Foucs the text input</button> 
			</div>
		);
	}
});
React.render(
	<MyComponet/>,
	document.getElementById("example")
);