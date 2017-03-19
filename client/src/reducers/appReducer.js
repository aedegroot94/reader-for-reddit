import update from 'immutability-helper';

const initialAppState = {
    subreddit: "civ",
    sorting: "hot"
};

export function appReducer(state = initialAppState, action) {
    return state;
}