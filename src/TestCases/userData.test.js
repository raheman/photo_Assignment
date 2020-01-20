import React from 'react';
import App from '../App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../userData';

configure({adapter:new Adapter()});

describe('UserData Component Test',()=>{
  it('should return data',()=>{
    const wrapper=shallow(<App />);
    expect(wrapper.find(userData)).not.toBe(null);
  })
  
})
