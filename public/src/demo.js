/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:58
 */
import '../css/product.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './demo/SpreadAttributes';
import LikeButton from './demo/LinkButton';
import Avatar from './demo/Avatar';
import CustomOl from './demo/MulitipleComponents';
import { PropValid, TransferProp } from './demo/ReusableComponents';
import TransferringProps from './demo/TransferringProps';
import MoreAboutRefs from './demo/MoreAboutRefs';
import { TodoList } from './demo/Animation';
import UserGist from './demo/InitialAjax';
import Todos from './demo/ExposeComponentFunctions';

/**
 * id 获取元素简便方法
 * @param id
 */
const getById = id=>document.getElementById(id);

const props = {};
props.foo = 'lai';
props.bar = 'chuanfeng';

ReactDOM.render(<Component {...props} foo={'override'} />, getById('div_1'));

ReactDOM.render(<LikeButton/>, getById('div_2'));

/*ReactDOM.render(<Avatar username="laichuanfeng@hotmail.com"/>, getById()('div_3'));*/

ReactDOM.render(
    <CustomOl
        results={[{ id: 1, text: 'First list' }, { id: 2, text: 'Second list' }]}
    />,
    getById('div_4'));


const invalidData = [1, 2, 3];
ReactDOM.render(
    <PropValid
        invalidData={invalidData}
        span={<span> This is a span childre. </span>}
        name={<span>This is a name</span>}
    />, getById('div_5'));

//Stateless Functions
ReactDOM.render(<TransferProp title="Go to Baidu"
                              href="https://baidu.com" />, getById('div_6'));


ReactDOM.render(
    <TransferringProps
        checked
        name="laichuanfeng"
        tabIndex="2"
        title="Tranferring Props"
        data-food="good"
        onClick={console.log.bind(console)}
    />, getById('div_7'));

ReactDOM.render(<MoreAboutRefs />, getById('div_7'));

ReactDOM.render(<TodoList />, getById('div_8'));

ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists" />, getById('div_9'));

ReactDOM.render(<Todos />,getById('div_10'));