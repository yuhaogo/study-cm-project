import login from './login';
import indexHeader from './inderHeader';
import indexBody from './indexBody';
import {combineReducers } from 'redux'; //合并reducers

const rootReducer=combineReducers({
    loginTypes:login,
    indexHeader:indexHeader,
    indexBody:indexBody
})

export default rootReducer;