/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 17:17
 */
import React,{Component} from 'react';

export default class LinkButton extends Component {
  constructor() {
    super();
    this.state = {liked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    let text=this.state.liked?'like':'haven\'t liked';
    return <p onClick={this.handleClick}>
      You {text} this.Click to toggle.
    </p>
  }
};
