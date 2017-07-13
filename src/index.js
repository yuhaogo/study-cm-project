import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import reducer  from './reducers'
import {Provider} from 'react-redux';
import App from './containers/Main';


const store=createStore(reducer,applyMiddleware(thunk));
// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('main'));
