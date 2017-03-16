import React from 'react'
import * as ReactRedux from 'react-redux';
import {ItemList} from './ItemList.jsx'

class AppUI extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <ItemList />
   }
}

export const App = ReactRedux.connect()(AppUI);
