import {leaderboards, competitors} from './dataWarehouse';

export const add = leaderboard => leaderboards.push(leaderboard);
export const unsubscribe = id => leaderboards.filter(l => l.id !== id);
export const addRow = row => competitors.push(row);