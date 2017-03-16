import * as Redux from 'redux';
import {itemReducer} from './itemReducer.js'
import {appReducer} from './appReducer.js'

export const mainReducer = Redux.combineReducers({
    items: itemReducer,
    app: appReducer
});