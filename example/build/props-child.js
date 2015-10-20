var GenericWrapper = React.createClass({displayName: "GenericWrapper",
  componentDidMount: function() {
    console.log(Array.isArray(this.props.children)); // => true
  },

  render: function() {
    return React.createElement("div", null);
  }
});

React.render(
  React.createElement(GenericWrapper, null, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)),
  document.body
);