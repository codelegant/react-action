/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:33
 */
import React from 'react';
const PropTypes = React.PropTypes;

const Todo = props => (
  <li
    onClick={props.onClick}
    style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
  >
    {props.text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
export default Todo;