
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

import { API_CONFIG } from './../config/api';
// import { message, Modal } from 'antd';

export const cFetch=(apiUrl,param)=>{
    const baseUrl=API_CONFIG.host+apiUrl;
    param.headers={
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    debugger;
    return fetch(baseUrl,param)
    .then()
    .then()
    .then()
    .then()

}