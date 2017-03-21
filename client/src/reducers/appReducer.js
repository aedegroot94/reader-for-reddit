import update from 'immutability-helper';

const initialAppState = {
    //TODO: this should not be hardcoded
    subreddit: "civ",
    sorting: "hot"
};

export function appReducer(state = initialAppState, action) {
    return state;
}