import {cFetch} from '../util/cFetch';
import {LOGIN } from '../constants/actionsType';

export const UserLogin =(url,creds,fbk)=>{
    debugger;
    return {
        type: LOGIN,
        fallback: fbk,
        payload: cFetch(url,{ method: 'POST', body: JSON.stringify(creds)})
    }
}