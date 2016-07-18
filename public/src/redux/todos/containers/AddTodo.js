/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

//TODO:为什么是传入 {dispatch}
let AddTodo = ({ dispatch })=> {
  let input = undefined;
  const submitHandler = e=> {
    e.preventDefault();
    if (! input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  };
  return (
      <div>
        <form onSubmit={e=>submitHandler(e)} >
          <input ref={node=>input = node} />
          <button type="submit" >Add Todo</button>
        </form>
      </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;