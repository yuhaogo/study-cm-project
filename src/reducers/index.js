import login from './login';
import inderHeader from './inderHeader';
import inderBody from './indexBody';
import {combineReducers } from 'redux'; //合并reducers

const rootReducer=combineReducers({
    loginTypes:login,
    indexHeader:inderHeader,
    indexBody:inderBody
})

export default rootReducer;