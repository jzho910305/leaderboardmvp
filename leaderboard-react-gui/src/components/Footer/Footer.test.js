import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('<Footer/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer/>);
    });

    it('Will render without any error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render one h3', () => {
        expect(wrapper.find('h3').length).toEqual(1);
    });

    it('Will render two p', () => {
        expect(wrapper.find('p').length).toEqual(2);
    });

    it('Will render one a', () => {
        expect(wrapper.find('a').length).toEqual(1);
    });
});