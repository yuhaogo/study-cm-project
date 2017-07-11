import {cFetch} from '../util/cFetch';
import {LOGIN } from '../constants/actionsType';

export const UserLogin =(url,creds)=>{
    debugger;
    return {
        type: LOGIN,
        fallback: url,
        payload: cFetch(url,{ method: 'POST', body: JSON.stringify(creds) })
    }
}