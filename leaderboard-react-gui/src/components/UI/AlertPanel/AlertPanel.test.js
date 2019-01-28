import React from 'react';
import AlertPanel from './AlertPanel';
import {shallow} from 'enzyme';

describe('<AlertPanel/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AlertPanel>Message</AlertPanel>);
    });

    it('Will render without error', () => {
       expect(wrapper).not.toEqual(null);
    });

    it('Will render children inside AlertPanel', () => {
        expect(wrapper.find('div').text()).toEqual('Message');
    });
})