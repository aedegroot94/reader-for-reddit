import React from 'react'
import * as ReactRedux from 'react-redux';


class PreferencesUI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='flex-item'>
            hello, world!
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



export const Preferences = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PreferencesUI);
