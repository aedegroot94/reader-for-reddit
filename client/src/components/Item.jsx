import React from 'react'
import * as ReactRedux from 'react-redux';

class ItemUI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nsfwWarning = this.props.item.nsfw ? <span className="nsfw">(NSFW)</span> : "";

        return <div className="item">
            <p className="item-title">{this.props.item.title} {nsfwWarning}</p>
            <p>Author: {this.props.item.author} - Comments: {this.props.item.comments.amount}</p>
        </div>
    }
}

// {
//     id: item.data.id,
//         title: item.data.title,
//     link: item.data.url,
//     comments: {amount: item.data.num_comments, link: "http://www.reddit.com" + item.data.permalink},
//     author: item.data.author,
//         score: item.data.score,
//     nsfw: item.data.over_18
// }


export const Item = ReactRedux.connect()(ItemUI);
