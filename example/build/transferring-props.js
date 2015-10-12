"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FancyCheckbox = React.createClass({
	displayName: "FancyCheckbox",

	render: function render() {
		/*this指代FancyCheckbox*/
		var _props = this.props;
		var checked = _props.checked;

		var other = _objectWithoutProperties(_props, ["checked"]);

		var fancyClass = this.props.checked ? "FancyChecked" : "FancyUnChecked";
		return React.createElement("div", _extends({}, other, { className: fancyClass }));
	}
});
React.render(React.createElement(
	FancyCheckbox,
	{ checked: true, onClick: console.log.bind(console) },
	"Hello world!"
), document.body);