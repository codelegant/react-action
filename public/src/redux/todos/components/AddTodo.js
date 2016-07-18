/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:27
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const node = ReactDOM.findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
        <div>
          <input type="text"
                 ref="input" />
          <button type="button"
                  onClick={this.handleClick} >
            Add
          </button>
        </div>
    );
  }
}
AddTodo.propTypes = {onAddClick: React.PropTypes.func.isRequired};