import React from 'react';
import StatisticDisplay, {defaultColor} from './StatisticDisplay';
import {shallow} from 'enzyme';

describe('<StatisticDisplay/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<StatisticDisplay result={9} caption='caption'/>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render 1 span and p', () => {
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('Will render default color when no color specified in props', () => {
        const style = {style: {color: defaultColor}};
        expect(wrapper.find(style).length).toEqual(1);
    });

    it('Will render given color when color is specified in props', () => {
        wrapper.setProps({color: 'red'});
        const style = {style: {color: 'red'}};
        expect(wrapper.find(style).length).toEqual(1);
    });
});