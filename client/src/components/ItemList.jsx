import React from 'react'
import * as ReactRedux from 'react-redux';

import { loadItemsAction } from '../reducers/actions.js'
import { Item } from './Item.jsx'

class ItemListUI extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //TODO: uncomment when loadItems is implemented on server.
        if(this.props.subreddit) {
            this.props.loadItems(this.props.subreddit, this.props.sorting);
        }
    }

    render() {
        let items = this.props.items ? this.props.items.map((item) => <Item item={item} />) : "No items found...";

        return <div>
            {items}
            </div>
    }
}

function mapStateToProps(state) {
    return {
        items: state.items.items,
        subreddit: state.app.subreddit,
        sorting: state.app.sorting
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadItems: (subreddit, sorting) => dispatch(loadItemsAction(subreddit, sorting))
    }
}

export const ItemList = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ItemListUI);
