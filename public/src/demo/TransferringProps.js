/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
/**
 * 使用 解构赋值 中的剩余属性特性来把未知属性批量提取出来
 * 列出所有要当前使用的属性，后面跟着 ...other。
 * var { checked, ...other } = this.props;
 */
import React from 'react';

export default class fancyCheckbox extends React.Component {
  render() {
    const { checked,title, ...other }=this.props;
    const fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    const fancyTitle=checked?`X ${title}`:`O ${title}`;
    return (
        <label>
          <input {...other}
                 defaultChecked={checked}
                 className={fancyClass}
                 type="checkbox"
          />
          {fancyTitle}
        </label>
    );
  }
}