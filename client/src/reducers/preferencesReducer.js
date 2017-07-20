import update from 'immutability-helper';

const initialPreferencesState = {
    open: false
};

export function preferencesReducer(state = initialPreferencesState, action) {
    switch(action.type) {
        case 'togglePreferences': {
            let newPrefs = !state.open;
            console.log("newPrefs: " + newPrefs);
            return update(state, {open: {$set: newPrefs}});
        }
        default: {
            return state;
        }
    }
}