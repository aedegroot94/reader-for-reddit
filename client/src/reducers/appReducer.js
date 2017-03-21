import update from 'immutability-helper';

const initialAppState = {
    //TODO: this should not be hardcoded
    subreddit: "civ",
    sorting: "hot",
    iframeUrl: null
};

export function appReducer(state = initialAppState, action) {
    switch(action.type) {
        case 'changeIframe': {
            return update(state, {iframeUrl: {$set: action.url}});
        }
        default: {
            return state;
        }
    }
}