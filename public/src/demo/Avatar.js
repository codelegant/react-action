/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 17:55
 */
import React from 'react';

class ProfilePic extends React.Component {
  render() {
    return <img src={`http://graph.facebook.com/${this.props.username}/picture`}/>;
  }
}

class ProfileLink extends React.Component {
  render() {
    return <a href={`http://www.facebook.com/${this.props.username}`}>
      {this.props.username}
    </a>;
  }
}

export default class Avatar extends React.Component {
  render() {
    return <div>
      <ProfilePic username={this.props.username}/>
      <ProfileLink username={this.props.username}/>
    </div>;
  }
};

