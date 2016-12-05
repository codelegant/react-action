/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * homepage: laichuanfeng.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/index';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>
  , document.getElementById('container'));