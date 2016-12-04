/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/index';

/**
 * todos 更新
 * @param state
 * @param action
 * @returns Object
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: ! todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
export default todos;