/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:49
 */
import React from 'react';

export default class Footer extends React.Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }
    const handlerClick = e=> {
      e.preventDefault();
      this.props.onFilterChange(filter);
    };
    return (
        <a href="#"
           onClick={e=>handlerClick(e)} >
          {name}
        </a>
    );
  }

  render() {
    return (
        <p>
          Show:
          {' '}
          {this.renderFilter('SHOW_ALL', 'All')}
          {', '}
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          {', '}
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
          .
        </p>
    );
  }

}
Footer.propTypes = {
  onFilterChange: React.PropTypes.func.isRequired,
  filter        : React.PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};