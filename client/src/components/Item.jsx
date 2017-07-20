import React from 'react'
import * as ReactRedux from 'react-redux';

import {changeIframeAction} from '../reducers/actions.js';

class ItemUI extends React.Component {
    constructor(props) {
        super(props);

        this.openItem = this.openItem.bind(this);
        this.openComments = this.openComments.bind(this);
    }

    openItem() {
        this.props.changeIframeAction(this.props.item.link);
    }

    openComments(){
        this.props.changeIframeAction(this.props.item.comments.link)
    }

    render() {
        let nsfwWarning = this.props.item.nsfw ? <span className="nsfw">(NSFW)</span> : "";

        return <div className="item">
            <p className="item-title"><a onClick={this.openItem}>{this.props.item.title} {nsfwWarning}</a></p>
            <p>Author: {this.props.item.author} - Score: {this.props.item.score} - <span onClick={this.openComments}>Comments: {this.props.item.comments.amount}</span></p>
        </div>
    }

}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeIframeAction: (url) => dispatch(changeIframeAction(url))
    }
}



export const Item = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ItemUI);
