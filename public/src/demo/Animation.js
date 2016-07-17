/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

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
    const items = this.state.items.map((item, i)=>(
        <li key={item}
             onClick={this.handleRemove.bind(this, i)} >
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