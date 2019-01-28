import React from 'react';
import Title from './Title';
import {shallow} from 'enzyme';

describe('<Title/>', () => {
   let wrapper;
   beforeEach(() => {
       wrapper = shallow(<Title>title</Title>);
   });

   it('Will render without error', () => {
      expect(wrapper).not.toEqual(null);
   });

    it('Will render children inside span', () => {
        expect(wrapper.find('span').text()).toEqual('title');
    });
});