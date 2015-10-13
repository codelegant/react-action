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

var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
	getInitialState:function(){
		return {checked:this.props.checked}
	},
	handleChange:function(event){
		this.setState({checked:event.target.checked});
	},
  render: function() {
    var $__0=    this.props,title=$__0.title,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{title:1});
    var checked=this.state.checked;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return (
      React.createElement("label", null, 
        React.createElement("input", React.__spread({},  other, 
          {checked: checked, 
          onChange: this.handleChange, 
          className: fancyClass, 
          type: "checkbox"})), 
        fancyTitle
      )
    );
  }
});

React.render(
	React.createElement(FancyCheckbox, {title: "LaiChuanfeng", checked: true, onClick: console.log.bind(console)}, 
		"Hello world!"
	),
	document.body
);