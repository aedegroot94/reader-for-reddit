import React from 'react'
import * as ReactRedux from 'react-redux';

class ItemUI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            Title: {this.props.item.title} <br />
            Comments: {this.props.item.comments.amount} <br />
        </div>
    }
}


export const Item = ReactRedux.connect()(ItemUI);
