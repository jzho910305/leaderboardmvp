import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<MenuItem/>', () => {
    it('component will render a li', () => {
        const wrapper = shallow(<MenuItem to='' exact=''></MenuItem>);
        expect(wrapper.find('li.MenuItem').exists()).toBe(true);
    });
    it('component will render one NavLink', () => {
        const wrapper = shallow(<MenuItem to='' exact=''></MenuItem>);
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});