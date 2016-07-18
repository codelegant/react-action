/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 11:40
 */
import {
    VisibilityFilters,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from './actions';

import {combineReducers} from 'redux';

/**
 * todos 更新
 * @param state
 * @param action
 * @returns Object
 */
const todos = (state = [], action)=> {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      //TODO：不使用三个 return 如何达到目的？
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index)=> {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    default:
      return state;
  }
};

/**
 * 显示过滤
 * @param state
 * @param action
 * @returns Object
 */
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action)=> {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

/**
 * state 更新
 * @param state
 * @param action
 * @return Object
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});
// 与上面等价的写法
// const todoApp = (state = {}, action)=> ({
//   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   todos: todos(state.todos, action)
// });

export default todoApp;