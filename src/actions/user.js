import {cFetch} from '../util/cFetch';
import cookie from 'js-cookie';

let actions ={
    UserLogin :(url,creds,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'POST', body: JSON.stringify(creds)}).then(function(res){
                var _data=res.Result;
                dispatch({
                    type: 'LOGIN_CG',
                    fallback: fbk,
                    payload: _data
                })
            }).then((res)=>{
                console.log(res);
                cookie.set('isLogin','isLogin');
            })
            
        }
    },
    SelectCompany:(url,creds,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'POST', body: JSON.stringify(creds)}).then(function(res){
                var _data=res.Result;
                dispatch({
                    type: 'LOGIN_INDEX',
                    fallback: fbk,
                    payload: _data
                })
            })
            
        }
    }
}
export default actions;

    