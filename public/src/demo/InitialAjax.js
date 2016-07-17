/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/17
 */
import React from 'react';
import $ from 'jquery';
export default class UserGist extends React.Component {
  constructor() {
    super();
    this.state = { username: '', lastGisUrl: '' };
  }

  componentDidMount() {
    this.serverRrequest = $.get(this.props.source, data=> {
      const lastGist = data[0];
      this.setState({
        username   : lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    });
  }

  componentWillUnmount() {
    this.serverRrequest.abort();
  }

  render() {
    return (
        <div>
          {this.state.username}'s last gist is <a href={this.state.lastGistUrl} >here</a>
        </div>
    );
  }
}