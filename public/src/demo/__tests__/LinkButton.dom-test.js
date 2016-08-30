/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/30 10:46
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LinkButton from '../LinkButton';
jest.unmock('../LinkButton');


describe('<LinkButton/>', ()=> {
  const linkButton = TestUtils.renderIntoDocument(<LinkButton />);
  const linkButtonNode = ReactDOM.findDOMNode(linkButton);

  it('Mount', ()=> {
    expect(linkButtonNode.textContent).toEqual('You haven\'t liked this.Click to toggle.');
  });

  it('Clicked',()=>{
    TestUtils.Simulate.click(linkButtonNode);
    expect(linkButtonNode.textContent).toEqual('You like this.Click to toggle.');
  });

  it('Clicked again',()=>{
    TestUtils.Simulate.click(linkButtonNode);
    expect(linkButtonNode.textContent).toEqual('You haven\'t liked this.Click to toggle.');
  });
});