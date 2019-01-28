import React from 'react';
import MenuItems from './MenuItems';
import MenuItem from './MenuItem/MenuItem';
import {shallow} from 'enzyme';

describe('<MenuItems/>', () => {
    let wrapper;
    beforeEach(() => {
        const items = [
            {name: 'Logout', link: '/logout', exact: true}
        ];
        wrapper = shallow(<MenuItems items={items}/>);
    });

    it('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });

    it('will render <MenuItem/> inside ul', () => {
        expect(wrapper.find(MenuItem).length).toEqual(1);
        expect(wrapper.find('ul').length).toEqual(1);
    })
});