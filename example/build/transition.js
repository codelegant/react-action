'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  displayName: 'TodoList',

  getInitialState: function getInitialState() {
    return { items: ['hello', 'world', 'click', 'me'] };
  },
  handleAdd: function handleAdd() {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  },
  handleRemove: function handleRemove(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  },
  render: function render() {
    var _this = this;

    var items = this.state.items.map(function (item, i) {
      return React.createElement(
        'div',
        { key: item, onClick: _this.handleRemove.bind(_this, i) },
        item
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleAdd },
        'Add Item'
      ),
      React.createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'example' },
        items
      )
    );
  }
});
React.render(React.createElement(TodoList, null), document.getElementById("example"));