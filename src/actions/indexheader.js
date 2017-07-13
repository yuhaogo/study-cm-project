import {cFetch} from '../util/cFetch';
import cookie from 'js-cookie';

let actions ={
    initHeader :(url,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'GET'}).then(function(res){
                var _data=res.Result;
                dispatch({
                    type: 'INDEX_HEADER',
                    fallback: fbk,
                    payload: _data
                })
            }).then((res)=>{
                console.log(res);
                cookie.set('isLogin','isLogin');
            })
            
        }
    }
}
export default actions;

    