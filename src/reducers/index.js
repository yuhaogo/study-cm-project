import login from './login';
import inderHead from './inderHead';
import {combineReducers } from 'redux'; //合并reducers

const rootReducer=combineReducers({
    loginTypes:login,
    indexHeader:inderHead
})

export default rootReducer;