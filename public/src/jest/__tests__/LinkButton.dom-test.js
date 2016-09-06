/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/30 10:46
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LinkButton from '../LinkButton';
describe('<LinkButton/>', () => {
  const linkButton = TestUtils.renderIntoDocument(<LinkButton />);
  const linkButtonNode = ReactDOM.findDOMNode(linkButton);

  it('Mount', () => {
    //获取初始状态的元素文本
    expect(linkButtonNode.textContent).toEqual('You haven\'t liked this.Click to toggle.');
  });

  it('Clicked', () => {
    //触发点击事件，并比较文本是否等于预期
    TestUtils.Simulate.click(linkButtonNode);
    expect(linkButtonNode.textContent).toEqual('You like this.Click to toggle.');
  });

  it('Clicked again', () => {
    //再次触发点击事件，并比较文本是否等于预期
    TestUtils.Simulate.click(linkButtonNode);
    expect(linkButtonNode.textContent).toEqual('You haven\'t liked this.Click to toggle.');
  });
});