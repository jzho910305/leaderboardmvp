import React from 'react';
import {mount} from 'enzyme';
import LeaderboardCard from './LeaderboardCard';
import Label from '../UI/Label/Label';
import {BrowserRouter as Router} from 'react-router-dom';
import {leaderboards} from "../../data/dataWarehouse";

describe('<LeaderboardCard>', () => {
    let wrapper;
    const props = {
        leaderboard: {
            id: 'l1',
            img: 'afl',
            name: 'AFL 2018',
            type: 'public',
            subscriber: ['usr_1', 'usr_2']
        }
    };

    const historyMock = {
        push: jest.fn()
    };

    beforeEach(() => {
        wrapper = mount(
            <Router>
                <LeaderboardCard {...props} history={historyMock}/>
            </Router>
        );
    });

    afterEach(() => {
       wrapper.unmount();
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will render with img src set to leaderboard img', () => {
        const path = `/img/${props.leaderboard.img}.png`;
        expect(wrapper.find('img').prop('src')).toEqual(path);
    });

    it('Will render with label set to leaderboard type', () => {
        expect(wrapper.find(Label).prop('children')).toEqual(props.leaderboard.type);
    });

    // it('Will route to leaderboard view when clicked', () => {
    //     const FakeFun = jest.spyOn(LeaderboardCard.instance(), 'click');
    //     wrapper.find(LeaderboardCard).simulate('click');
    //     wrapper.update();
    //     expect(FakeFun).toHaveBeenCalled();
    //
    //
    //     // wrapper.find(LeaderboardCard).simulate('click');
    //     // expect(historyMock.push.mock.calls[0]).toEqual([ `/leaderboard/${props.leaderboard.id}`, {id: props.leaderboard.id} ]);
    // });
});
