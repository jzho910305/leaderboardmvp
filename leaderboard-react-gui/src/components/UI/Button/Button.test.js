import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('<Button/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button>button</Button>);
    });

    it('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });

    it('Will render children inside button', () => {
        expect(wrapper.find('button').text()).toEqual('button');
    });
});