import React from 'react';
import ViewAlbum from '../App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../userData';

configure({adapter:new Adapter()});

describe('View Album Component Test',()=>{
  it('should return data',()=>{
    const wrapper=shallow(<ViewAlbum />);
    expect(wrapper.find(userData)).not.toBe(null);
  })
  
})
