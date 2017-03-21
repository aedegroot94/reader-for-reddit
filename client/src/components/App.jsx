import React from 'react'
import * as ReactRedux from 'react-redux';
import {ItemList} from './ItemList.jsx'

class AppUI extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <div className='flex-container'>
         <ItemList />
         <iframe src={this.props.iframeUrl} className='flex-item'></iframe>
      </div>
   }
}

function mapStateToProps(state) {
   return {
      iframeUrl: state.app.iframeUrl
   }
}

export const App = ReactRedux.connect(mapStateToProps)(AppUI);
