import {cFetch} from '../util/cFetch';
// import cookie from 'js-cookie';

let actions ={

    //请求模板
    // initHeader :(url,fbk)=>{
    //     return (dispatch)=> {
    //         cFetch(url,{ method: 'GET'}).then(function(res){
    //             var _data=res.Result;
    //             dispatch({
    //                 type: 'INDEX_HEADER',
    //                 fallback: fbk,
    //                 payload: _data
    //             })
    //         }).then((res)=>{
    //             cookie.set('isLogin','isLogin');
    //         })
    //     }
    // },
    getPower :(url,fbk)=>{
        return (dispatch)=> {
            cFetch(url,{ method: 'GET'}).then(function(res){
                var _data=res.Result;
                dispatch({
                    type: 'INDEX_GETPOWER',
                    fallback: fbk,
                    payload: _data
                })
            })
        }
    }
}
export default actions;

    