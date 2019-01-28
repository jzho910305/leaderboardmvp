import React from 'react';
import NameAvatar, {getInitial} from './NameAvatar';
import {shallow} from 'enzyme';

describe('<NameAvatar/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NameAvatar name='Jing Zhou'/>);
    });

    it('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });

    it('Will render 2 spans', () => {
        expect(wrapper.find('span').length).toEqual(2);
    });
});

describe('getInitial()', () => {
    it('Will return initial when no middle name', () => {
        expect(getInitial('Jing Zhou')).toEqual('JZ');
    });

    it('Will return initial when name has middle name', () => {
        expect(getInitial('Jing de Zhou')).toEqual('JZ');
    });
});