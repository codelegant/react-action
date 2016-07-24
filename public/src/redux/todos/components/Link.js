/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/18
 */
import React from 'react';
const PropTypes = React.PropTypes;
const Link = props=> {
  if (props.active) {
    return <span>{props.children}</span>;
  }
  return (
      <a href="#"
         onClick={e=> {
           e.preventDefault();
           props.onClick();
         }} >
        {props.children}
      </a>
  );
};
Link.propTypes = {
  active  : PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick : PropTypes.func.isRequired
};

export default Link;