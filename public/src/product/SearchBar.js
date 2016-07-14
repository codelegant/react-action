/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/14 16:54
 */
import React from 'react';

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <form>
      <input type="text" placeholder="Search..."/>
      <p>
        <input type="checkbox"/>
        {' '}
        Only show product in stock
      </p>
    </form>
  }
}
