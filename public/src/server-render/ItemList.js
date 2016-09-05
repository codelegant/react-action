/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/1 10:56
 */
/**
 * public/src/server-render/ItemList.js
 * node 不支持 ES6 的 export 与 import关键字，所以需要使用 module.exports 导出模块
 * 但是当导出模块之后，可以使用 babel-register 转换，所以可以在模块内部使用 import。
 */
import React,{PropTypes} from 'react';
module.exports = class ItemList extends React.Component {
  static propTypes={
    items:PropTypes.arrayOf(PropTypes.string)
  };
  constructor(props) {
    super(props);
    this.state = {
      items:props.items
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({
      items:this.state.items.concat(`Item ${this.state.items.length+1}`)
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Add Item</button>
        <ul>
          {this.state.items.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
};