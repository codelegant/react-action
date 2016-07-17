/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/14 16:57
 */
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText : '',
      inStockOnly: false
    };
    this._handleUserInput = this._handleUserInput.bind(this);
  }

  _handleUserInput(filterText, inStockOnly) {
    return this.setState({
      filterText,
      inStockOnly
    });
  }

  render() {
    return (<div>
      <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this._handleUserInput}
      />
      <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
      />
    </div>);
  }
}
