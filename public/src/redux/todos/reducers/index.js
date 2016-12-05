/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// const combineReducers = function combineReducers(reducers) {
//   return (state = {}, action) => (
//     Object.keys(reducers).reduce(
//       (nextState, key) => {
//         console.log(nextState);
//         console.log(key);
//         nextState[key] = reducers[key](state[key], action);
//         console.log(nextState);
//         return nextState;
//       },
//       {}
//     )
//   );
// };

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});


// const todoApp=(state={},action)=>({
// 作为键 todos 代替 state 中的 todos，作为值的 todos 代表 action 中的 todos
//   todos:todos(state.todos,action),
//   visibilityFilter:visibilityFilter(state.visibilityFilter,action)
// });

export default todoApp;