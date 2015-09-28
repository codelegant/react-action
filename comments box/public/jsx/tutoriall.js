var ComnentBox=React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				Hello,worl!I am a ComnentBox.		
			</div>
		);
	}
});
React.render(
	<commentBox/>
	document.getElementById("content");
);