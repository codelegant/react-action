/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:05
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './container/App';

ReactDOM.render(
    <Provider store={createStore(todoApp)} >
      <App />
    </Provider>
    , document.getElementById('container'));