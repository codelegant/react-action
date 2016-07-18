/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 11:26
 */

/**
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其它常量
 * @type {{SHOW_ALL: string, SHOW_COMPLETED: string, SHOW_ACTIVE: string}}
 */
export const VisibilityFilters = {
  SHOW_ALL      : 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE   : 'SHOW_ACTIVE'
};

/**
 * action 创建函数
 */
export const addTodo = text=>({type: ADD_TODO, text});

export const completeTodo = index=>({type: TOGGLE_TODO, index});

export const setVisibilityFilter = filter=>({
  type: SET_VISIBILITY_FILTER,
  filter
});
