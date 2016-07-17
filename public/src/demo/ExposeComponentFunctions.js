/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
import React from 'react';

class Todo extends React.Component {
  animate() {
    console.log('Pretend %s is animating', this.props.title);
  }

  render() {
    return <div onClick={this.props.onClick} >{this.props.title}</div>;
  }
}

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = { items: ['Apple', 'Banana', 'Cranberry'] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const items = this.state.items.filter((item, i)=>index !== i);
    this.setState({ items }, ()=> {
      if (items.length === 1) {
        this.refs.item0.animate();
      }
    });
  }

  render() {
    return (
        <div>
          {this.state.items.map((item, i)=><Todo onClick={this.handleClick}
                                                 key={i}
                                                 title={item}
                                                 ref={'item' + i} />)}
        </div>
    );
  }
}
