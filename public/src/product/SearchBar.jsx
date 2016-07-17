/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/14 16:54
 */
import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    return this.props.onUserInput(
        this.refs.filterTextInput.value,
        this.refs.inStockOnlyInput.checked
    );
  }

  render() {
    return <form>
      <input type="text"
             placeholder="Search..."
             ref="filterTextInput"
             onChange={this._handleChange}
             value={this.props.filterText}/>
      <p>
        <input type="checkbox"
               ref="inStockOnlyInput"
               onChange={this._handleChange}
               checked={this.props.inStockOnly}/>
        {''}
        Only show product in stock
      </p>
    </form>
  }
}
