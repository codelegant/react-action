/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/15
 */
import React from 'react';

export default class CustomOl extends React.Component {
  render() {
    const items = [];
    this.props.results.forEach(result=> {
      items.push(<li key={`result-${result.id}`}>{result.text}</li>);
    });
    return <ol>{items}</ol>;
  }
}