/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
import { connect } from 'react-redux';
import { toggleTodo, todoFilters } from '../actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case todoFilters.SHOW_ALL:
      return todos;
    case todoFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case todoFilters.SHOW_ACTIVE:
      return todos.filter(t => ! t.completed);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
