/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
// import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const combineReducers = function combineReducers(reducers) {
  return (state = {}, action) => (
    Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      }
    )
  );

};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

console.log(todoApp);

// const todoApp=(state={},action)=>({
//   todos:todos(state.todos,action),
//   visibilityFilter:visibilityFilter(state.visibilityFilter,action)
// });

export default todoApp;