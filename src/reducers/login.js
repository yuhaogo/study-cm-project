import cookie from 'js-cookie';

const initialState={
    SystemPostion:'Login',
    loginType:'userLogin',
    companyList:[],
    isLogin:cookie.get('isLogin')?true:false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_CG':
            var comItems= action.payload;
            const newState={
                loginType:'companySelect',
                companyList:comItems
            }
            return Object.assign({},state,newState);
        case 'LOGIN_INDEX':
            debugger;
            const indexState={
                SystemPostion:'Index'
            }
            var test=Object.assign({},state,indexState);
            return test;
        default:
            return state;
    }
}