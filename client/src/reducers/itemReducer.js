import update from 'immutability-helper';

    //TODO: empty items array
const initialItemState = {
    items: null
};

export function itemReducer(state = initialItemState, action) {
    switch(action.type) {
        case 'loadItems': {
            return update(state, {items: {$set: action.itemList}});
        }
        default: {
            return state;
        }
    }
}