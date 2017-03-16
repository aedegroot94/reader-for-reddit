import request from 'superagent';
const server = 'http://localhost:3000';

export function loadItemsAction(subreddit, sorting) {
    return (dispatch) => {
        request
            .get(server + '/r/' + subreddit + '/' + sorting)
            .end((err, res) => {
                if (!res || err) console.log("Error loading items");
                else {
                    let itemList = JSON.parse(res.text);
                    dispatch({type: 'loadItems', itemList});
                }
            })

    }
}