/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:58
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './demo/SpreadAttributes';
import LikeButton from './demo/LinkButton';
import Avatar from './demo/Avatar';
import MulitComponent from './demo/MulitipleComponents';
import { PropValid,TransferProp,TickTock } from './demo/ReusableComponents';

import '../css/product.css';

const props = {};
props.foo = 'lai';
props.bar = 'chuanfeng';

ReactDOM.render(<Component {...props} foo={'override'}/>, document.getElementById('div_1'));

ReactDOM.render(<LikeButton/>, document.getElementById('div_2'));

/*ReactDOM.render(<Avatar username="laichuanfeng@hotmail.com"/>, document.getElementById('div_3'));*/

ReactDOM.render(
    <MulitComponent
        results={[{ id: 12340, text: 'First list' }, { id: 56789, text: 'Second list' }]}
    />,
    document.getElementById('div_4'));


const invalidData = [1, 2, 3];
ReactDOM.render(
    <PropValid
        invalidData={invalidData}
        span={<span> This is a span childre. </span>}
        name={<span>This is a name</span>}
    />, document.getElementById('div_5'));

ReactDOM.render(<TransferProp href="https://baidu.com"/>, document.getElementById('div_6'));

// ReactDOM.render(<TickTock/>, document.getElementById('div_7'));