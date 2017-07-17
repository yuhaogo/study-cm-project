import {cFetch} from '../util/cFetch';

let actions ={
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

    