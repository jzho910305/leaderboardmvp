import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<MenuItem/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MenuItem link=''/>);
    });

    it ('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });

    it('Will render a li', () => {
        expect(wrapper.find('li.MenuItem').exists()).toBe(true);
    });
    it('Will render one NavLink', () => {
        expect(wrapper.find(NavLink).length).toEqual(1);
    });
});