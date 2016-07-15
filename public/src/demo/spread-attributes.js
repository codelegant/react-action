/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:54
 */

import React from 'react';

export default  class Component extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <div>{this.props.foo}  {this.props.bar}</div>
  }
}