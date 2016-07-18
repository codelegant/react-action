/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:33
 */
import React from 'react';
const PropTypes = React.PropTypes;
export default class Todo extends React.Component {
  render() {
    return (
        <li onClick={this.props.onClick}
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none',
              cursor        : this.props.completed ? 'default' : 'pointer'
            }} >
          {this.props.text}
        </li>
    );
  }
}
Todo.propTypes = {
  onClick  : React.PropTypes.func.isRequired,
  text     : React.PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
