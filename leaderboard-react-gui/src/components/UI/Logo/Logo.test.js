import React from 'react';
import Logo from './Logo';
import {shallow} from 'enzyme';

describe('<Logo/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Logo/>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });
});