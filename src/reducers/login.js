import cookie from 'js-cookie';

const initialState={
    SystemPostion:'Login',
    loginType:'userLogin',
    companyList:localStorage.getItem('Companys'),
    isLogin:cookie.get('isLogin')?true:false,
    NowCompanyId:localStorage.getItem('NowCompanyId')
}
export default (state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_CG':
            var comItems= action.payload;
            localStorage.setItem('Companys',JSON.stringify(comItems));
            const newState={
                loginType:'companySelect',
                companyList:comItems
            }
            return Object.assign({},state,newState);
        case 'LOGIN_INDEX':
            debugger;
            localStorage.setItem('NowCompanyId',action.payload.CompanyId);
            const indexState={
                SystemPostion:'Index',
                NowCompanyId:action.payload.CompanyId
            }
            var test=Object.assign({},state,indexState);
            return test;
        default:
            return state;
    }
}