"use strict";

var ProductCategoryRow = React.createClass({
  displayName: "ProductCategoryRow",

  render: function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        { colSpan: "2" },
        this.props.category
      )
    );
  }
});

var ProductRow = React.createClass({
  displayName: "ProductRow",

  render: function render() {
    var name = this.props.product.stocked ? this.props.product.name : React.createElement(
      "span",
      { style: { color: "red" } },
      this.props.product.name
    );
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        name
      ),
      React.createElement(
        "td",
        null,
        this.props.product.price
      )
    );
  }
});

var ProductTable = React.createClass({
  displayName: "ProductTable",

  render: function render() {
    var _this = this;

    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(_this.props.filterText) === -1 || !product.stocked && _this.props.inStockOnly) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
      }
      rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
      lastCategory = product.category;
    });
    return React.createElement(
      "table",
      { className: "table" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Name"
          ),
          React.createElement(
            "th",
            null,
            "Price"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        rows
      )
    );
  }
});

var SearchBar = React.createClass({
  displayName: "SearchBar",

  handleChange: function handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value, this.refs.inStockOnlyInput.getDOMNode().checked);
  },
  render: function render() {
    return React.createElement(
      "form",
      null,
      React.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Search...",
        value: this.props.filterText,
        ref: "filterTextInput",
        onChange: this.handleChange }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          React.createElement("input", {
            type: "checkbox",
            checked: this.props.inStockOnly,
            ref: "inStockOnlyInput",
            onChange: this.handleChange }),
          "",
          "Only show products in stock"
        )
      )
    );
  }
});

var FilterableProductTable = React.createClass({
  displayName: "FilterableProductTable",

  getInitialState: function getInitialState() {
    return {
      filterText: "",
      inStockOnly: false
    };
  },
  handleUserInput: function handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-4 col-md-offset-4" },
      React.createElement(SearchBar, {
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly,
        onUserInput: this.handleUserInput }),
      React.createElement(ProductTable, {
        products: this.props.products,
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly })
    );
  }
});
var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];
React.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.body);