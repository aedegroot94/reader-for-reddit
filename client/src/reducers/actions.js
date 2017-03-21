import request from 'superagent';

export function loadItemsAction(subreddit, sorting) {
    return (dispatch) => {
        request
            .get('http://www.reddit.com/r/' + subreddit + '/' + sorting + '/.json')
            .end((err, res) => {
                if (!res || err) console.log('Error loading items');
                else {
                    let parsed = JSON.parse(res.text);

                    //makes the big object into a smaller object with just the information that we need
                    let itemList = parsed.data.children.map((item) => {
                            return {
                                id: item.data.id,
                                title: item.data.title,
                                link: item.data.url,
                                comments: {amount: item.data.num_comments, link: "http://www.reddit.com" + item.data.permalink},
                                author: item.data.author,
                                score: item.data.score,
                                nsfw: item.data.over_18
                            };
                        }
                    );
                    dispatch({type: 'loadItems', itemList});
                }
            })

    }
}