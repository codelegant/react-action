/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/14 16:46
 */

import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor() {
    super()
  }

  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach((product)=> {
      if (product.name.indexOf(this.props.filterText) === - 1
          || (! product.stocked && this.props.inStockOnly))
        return;

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category}
                                      key={product.category}/>);
      }
      rows.push(<ProductRow product={product}
                            key={product.name}/>);
      lastCategory = product.category;
    });
    return <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  }
}
