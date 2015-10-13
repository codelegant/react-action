// var FancyCheckbox=React.createClass({
// 	render: function() {
// 		/*this指代FancyCheckbox*/
// 		var {checked,...other}=this.props;
// 		var fancyClass=this.props.checked?"FancyChecked":"FancyUnChecked";
// 		return (
// 			<div {...other} className={fancyClass} />
// 		);
// 	}
// });

var FancyCheckbox = React.createClass({
	getInitialState:function(){
		return {checked:this.props.checked}
	},
	handleChange:function(event){
		this.setState({checked:event.target.checked});
	},
  render: function() {
    var {title, ...other } = this.props;
    var checked=this.state.checked;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return (
      <label>
        <input {...other}
          checked={checked}
          onChange={this.handleChange}
          className={fancyClass}
          type="checkbox" />
        {fancyTitle}
      </label>
    );
  }
});

React.render(
	<FancyCheckbox title="LaiChuanfeng" checked={true} onClick={console.log.bind(console)}>
		Hello world!
	</FancyCheckbox>,
	document.body
);