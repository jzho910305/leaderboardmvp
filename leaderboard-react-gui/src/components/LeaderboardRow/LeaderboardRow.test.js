import React from 'react';
import {mount} from 'enzyme';
import LeaderboardRow from './LeaderboardRow';
import StatisticDisplay from '../UI/StatisticDisplay/StatisticDisplay';
import {gold} from './LeaderboardRow';

describe('<LeaderboardRow>', () => {
    let wrapper, props;
    beforeEach(() => {
        props = {
            row: {
                wins: 1,
                draws: 1,
                losses: 1,
                name: 'Jing Zhou'
            },
            rank: 1
        };
        wrapper = mount(<LeaderboardRow {...props}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render 4 StatisticDisplays', () => {
        expect(wrapper.find(StatisticDisplay).length).toEqual(4);
    });

    it('Will render rank with gold color when rank is 1', () => {
        expect(wrapper.find({style: gold}).length).toEqual(1);
    });

    it('Will NOT render rank with gold color when rank is NOT 1', () => {
        wrapper.setProps({rank: 2});
        expect(wrapper.find({style: gold}).length).toEqual(0);
    });

    it('Will wins + draws - losses as point', () => {
        const actualPoints = wrapper.find(StatisticDisplay).get(3).props.result;
        const expectedPoints = props.row.wins + props.row.draws - props.row.losses;
        expect(actualPoints).toEqual(expectedPoints);
    });

});