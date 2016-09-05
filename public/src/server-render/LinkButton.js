/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/1 10:56
 */
import React from 'react';
/*eslint no-console:0*/
module.exports = class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: props.liked};
    this.handleClick = this.handleClick.bind(this);
    console.log('constructor');
  }

  handleClick() {
    console.log('handleClick');
    return this.setState({
      liked: !this.state.liked
    });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(window);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    console.log(window);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    console.log(window);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    console.log(window);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    console.log(window);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log(window);
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.handleClick}>Toggle Text</button>
        <p>
          You {this.state.liked ? 'like' : 'havent\'t liked'} this.Click to toggle.
        </p>
      </div>
    );
  }
};