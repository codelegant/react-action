/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/1 10:57
 */
//public/src/server-render/browser.js
import React from 'react';
import {render} from 'react-dom';
const ItemList=require('./ItemList');
const model=require('./model');
render(<ItemList {...model}/>, document.getElementById('container'));