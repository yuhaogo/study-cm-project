import {cFetch} from '../util/cFetch';
import cookie from 'js-cookie';

let actions ={
    UserLogin :(url,creds,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'POST', body: JSON.stringify(creds)}).then(function(res){
                var _data=res.Result;
                cookie.set('usercache',JSON.stringify({SessionKey:res.SessionKey}));
                dispatch({
                    type: 'LOGIN_CG',
                    fallback: fbk,
                    payload: _data
                })
            })
            
        }
    },
    SelectCompany:(url,creds,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'POST', body: JSON.stringify(creds)}).then(function(res){
                var _data=res.Result||{};
                _data.CompanyId=creds.CompanyId;
                dispatch({
                    type: 'LOGIN_INDEX',
                    fallback: fbk,
                    payload: _data
                })
            }).then(()=>{
                cookie.set('isLogin','isLogin');
            })
            
        }
    }
}
export default actions;

    