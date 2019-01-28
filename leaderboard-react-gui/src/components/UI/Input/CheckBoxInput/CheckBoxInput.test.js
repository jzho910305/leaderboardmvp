import React from 'react';
import CheckBoxInput from './CheckBoxInput';
import {shallow} from 'enzyme';

describe('<CheckBoxInput/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CheckBoxInput/>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render 1 input and label', () => {
        expect(wrapper.find('input').length).toEqual(1);
        expect(wrapper.find('label').length).toEqual(1);
    });
});