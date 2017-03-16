import update from 'immutability-helper';

    //TODO: empty items array
const initialItemState = {
    items: [
        {title: "Droids interrupt darth vader interview", link: "https://i.imgur.com/934hfAo.gifv", comments: {amount: 322, link: "https://www.reddit.com/r/funny/comments/5zqk2z/droids_interrupt_darth_vader_interview/?utm_content=comments&utm_medium=hot&utm_source=reddit&utm_name=frontpage"}},
        {title: "\"Hey, wanna be friends?\"", link: "http://i.imgur.com/aUuZUBU.gifv", comments: {amount: 100, link: "https://www.reddit.com/r/gifs/comments/5zpuf3/hey_wanna_be_friends/"}}]
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