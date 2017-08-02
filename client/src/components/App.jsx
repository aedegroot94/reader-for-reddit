import React from 'react';
import * as ReactRedux from 'react-redux';
import {ItemList} from './ItemList.jsx';
import {Preferences} from './Preferences.jsx';
import {togglePreferencesAction} from '../reducers/actions.js';

class AppUI extends React.Component {
   constructor(props) {
      super(props);

      this.togglePreferences = this.togglePreferences.bind(this);
   }

   togglePreferences() {
      this.props.togglePreferencesAction();
   }

   render() {

      var rightAreaContent;
      if(this.props.preferencesOpen) {
         rightAreaContent = <Preferences />;
      } else {
         rightAreaContent = <iframe src={this.props.iframeUrl} className='flex-item'></iframe>;
      }

      return <div>
         <div className="header"><span className="title">Reader For Reddit</span> || <a onClick={this.togglePreferences}>Preferences</a></div>
         <div className='flex-container'>
            <ItemList />
            {rightAreaContent}
         </div>
      </div>
   }
}

function mapStateToProps(state) {
   return {
      iframeUrl: state.app.iframeUrl,
      preferencesOpen: state.preferences.open
   }
}

function mapDispatchToProps(dispatch) {
   return {
      togglePreferencesAction: () => dispatch(togglePreferencesAction())
   }
}

export const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AppUI);
