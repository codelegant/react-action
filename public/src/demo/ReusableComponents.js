/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/16
 */
import React, { Component, PropTypes } from 'react';

export class PropValid extends Component {
  static propTypes = {
    //属性验证
    invalidData: PropTypes.array,
    span       : PropTypes.element.isRequired
  };
  static defaultProps = {
    //默认属性
    defaultProp: 'laichuanfeng'
  };

  render() {
    return (<p>Prop Valid
      {this.props.defaultProp && this.props.defaultProp}
      {this.props.span}
      {this.props.name}
    </p>);
  }
}

/**
 * Stateless Functions
 * @param props
 * @constructor
 */
export const TransferProp = props=><a {...props}>Click</a>;