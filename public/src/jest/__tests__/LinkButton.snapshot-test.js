/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/30 12:06
 */
import React from 'react';
import renderer from 'react-test-renderer';
import LinkButton from '../LinkButton';
describe('<LinkButton/>',()=>{
  it('Snapshot',()=>{
    const component = renderer.create(<LinkButton/>);

    let snapshot=component.toJSON();
    expect(snapshot).toMatchSnapshot();

    snapshot.props.onClick();
    snapshot=component.toJSON();
    expect(snapshot).toMatchSnapshot();
    
    snapshot.props.onClick();
    snapshot=component.toJSON();
    expect(snapshot).toMatchSnapshot()
  });
});