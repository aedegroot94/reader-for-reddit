import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import thunk from 'redux-thunk';

import { mainReducer } from './reducers/mainReducer';
import { App } from './components/App';


const store = Redux.createStore(mainReducer, Redux.applyMiddleware(thunk));

const mainComponent =
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>;


ReactDOM.render(mainComponent, document.getElementById('react-root'));
