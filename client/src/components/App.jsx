import React from 'react'
import * as ReactRedux from 'react-redux';

class AppUI extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <h1>Hello, World! </h1>
   }
}

export const App = ReactRedux.connect()(AppUI);
