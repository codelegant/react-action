/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
import React from 'react';

export default class MoreAboutRefs extends React.Component {
  componentDidMount(){
    this._input.focus();
  }
  render() {
    return <input ref={ref=>this._input = ref} />;/*c 代表 DOM 节点*/
  }
}
