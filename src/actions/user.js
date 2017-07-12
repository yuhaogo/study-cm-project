import {cFetch} from '../util/cFetch';

export const UserLogin =(url,creds,fbk)=>{
    return {
        type: 'LOGIN_CG',
        fallback: fbk,
        payload: cFetch(url,{ method: 'POST', body: JSON.stringify(creds)}).then(function(res){
            console.log(res);
        })
    }
}