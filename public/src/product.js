/**
 * Author: codelegant
 * Email: laichuanfeng@hotmail.com
 * DateTime: 2016/7/14 16:21
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './product/FilterableProductTable';
import '../css/product.css';

let PRODUCTS = [
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('container')
);