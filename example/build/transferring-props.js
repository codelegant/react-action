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

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FancyCheckbox = React.createClass({
  displayName: 'FancyCheckbox',

  getInitialState: function getInitialState() {
    return { checked: this.props.checked };
  },
  handleChange: function handleChange(event) {
    this.setState({ checked: event.target.checked });
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;

    var other = _objectWithoutProperties(_props, ['title']);

    var checked = this.state.checked;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return React.createElement(
      'label',
      null,
      React.createElement('input', _extends({}, other, {
        checked: checked,
        onChange: this.handleChange,
        className: fancyClass,
        type: 'checkbox' })),
      fancyTitle
    );
  }
});

React.render(React.createElement(
  FancyCheckbox,
  { title: 'LaiChuanfeng', checked: true, onClick: console.log.bind(console) },
  'Hello world!'
), document.body);