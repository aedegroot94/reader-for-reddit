import update from 'immutability-helper';

const initialAppState = {
    subreddit: null,
    sorting: "top"
};

export function appReducer(state = initialAppState, action) {
    return state;
}