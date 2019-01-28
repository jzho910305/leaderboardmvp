import React from 'react';
import Spinner from './Spinner';
import {shallow} from 'enzyme';

describe('<Spinner/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Spinner/>);
    });

    it ('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });
});