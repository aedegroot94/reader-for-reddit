import * as Redux from 'redux';
import {itemReducer} from './itemReducer.js'
import {appReducer} from './appReducer.js'
import {preferencesReducer} from './preferencesReducer.js'

export const mainReducer = Redux.combineReducers({
    items: itemReducer,
    app: appReducer,
    preferences: preferencesReducer
});