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
    super()
  }

  render() {
    return <div>
      <SearchBar/>
      <ProductTable products={this.props.products}/>
    </div>
  }
}
