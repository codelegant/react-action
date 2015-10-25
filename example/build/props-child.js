"use strict";

var GenericWrapper = React.createClass({
  displayName: "GenericWrapper",

  componentDidMount: function componentDidMount() {
    console.log(Array.isArray(this.props.children)); // => true
  },

  render: function render() {
    return React.createElement("div", null);
  }
});

React.render(React.createElement(
  GenericWrapper,
  null,
  React.createElement("span", null),
  React.createElement("span", null),
  React.createElement("span", null)
), document.body);