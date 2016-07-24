/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
import React from 'react';
//开发环境写法
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//生产环境写法
// const ReactCSSTransitionGroup=React.addons.CSSTransitionGroup;


export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
  };

  handleAdd() {
    const newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    /**
     * 绑定事件处理器的三种方式
     * ()=>this.handleRemove(i)
     * (i)=>this.handleRemove(i)
     * this.handleRemove.bind(i)//推荐做法
     * @type {Array}
     */
    const items = this.state.items.map((item, i)=>(
        <li key={item}
             onClick={this.handleRemove.bind(i)} >
          {item}
        </li>
    ));
    return (
        <div>
          <button onClick={this.handleAdd} >Add Item</button>
          <ReactCSSTransitionGroup
              component="ul"
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
          >
            {items}
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}