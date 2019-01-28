import React from 'react';
import {shallow} from 'enzyme';
import Label from './Label';

describe('<Label/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Label>label</Label>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render children inside label', () => {
        expect(wrapper.text()).toEqual('label');
    });
});