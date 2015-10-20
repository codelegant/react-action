(function(){
	var Counter = React.createClass({displayName: "Counter",
  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {count: this.props.initialCount};
  },

  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    return React.createElement("button", {type: "button", onClick: this.handleClick}, this.state.count);
  }
});

React.render(React.createElement(Counter, {initialCount: 7}), document.body);
})()