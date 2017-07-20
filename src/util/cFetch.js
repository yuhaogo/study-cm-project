
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

import { API_CONFIG } from './../config/api';
import { Modal } from 'antd';

//var api_host="http://127.0.0.1:91"
function checkOut401(res) {
    console.log(res.headers.get('Content-Type'));
    if(res.status===401){
        Modal.error({
            title: '登陆验证过期',
            content: '您的登陆验证已过期，请重新登陆'
        });
        return Promise.reject(res);
    }
    return res;
}
function dataJson(res) {
    res=res.json();
    return res;
}
export const cFetch=(apiUrl,param)=>{
    const baseUrl=API_CONFIG.host+apiUrl;
    param.headers={
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    param.credentials= 'include';
    //param.mode='no-cors';
    return fetch(baseUrl,param)
    .then(checkOut401)
    .then(dataJson)
}