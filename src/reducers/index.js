import login from './login';
import {combineReducers } from 'redux'; //合并reducers

const rootReducer=combineReducers({
    loginTypes:login
})

export default rootReducer;