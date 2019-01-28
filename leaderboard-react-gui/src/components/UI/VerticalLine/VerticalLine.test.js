import React from 'react';
import VerticalLine from './VerticalLine';
import {shallow} from 'enzyme';

describe('<Title/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VerticalLine/>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });
});