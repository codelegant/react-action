/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:58
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './demo/spread-attributes'
import LikeButton from './demo/LinkButton';
import Avatar from './demo/Avatar';

let props = {};
props.foo = 'lai';
props.bar = 'chuanfeng';

ReactDOM.render(<Component {...props} foo={'override'}/>, document.getElementById('div_1'));

ReactDOM.render(<LikeButton/>, document.getElementById('div_2'));
ReactDOM.render(<Avatar username="laichuanfeng@hotmail.com"/>, document.getElementById('div_3'));