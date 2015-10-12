var FancyCheckbox=React.createClass({
	render: function() {
		/*this指代FancyCheckbox*/
		var {checked,...other}=this.props;
		var fancyClass=this.props.checked?"FancyChecked":"FancyUnChecked";
		return (
			<div {...other} className={fancyClass} />
		);
	}
});
React.render(
	<FancyCheckbox checked={true} onClick={console.log.bind(console)}>
		Hello world!
	</FancyCheckbox>,
	document.body
);