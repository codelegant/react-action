/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:43
 */
import React from 'react';
import Todo from './Todo';
const PropTypes = React.PropTypes;
const TodoList = props=>(
    <ul>
      {props.todos.map(todo=>
          <Todo
              {...todo}
              key={todo.id}
              onClick={()=>props.onTodoClick(todo.id)}
          />
      )}
    </ul>
);
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default TodoList;